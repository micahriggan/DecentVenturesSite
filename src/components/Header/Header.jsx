import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import config from "../../constants/config";
const url = process.env.PUBLIC_URL;
export default function(props) {
  let currentPage;
  let links = [];
  let logo = "";
  for (let page of config.pages) {
    if (!page.disabled) {
      if (props.path.endsWith(page.url)) {
        currentPage = page;
        logo = require(`../../resources/${currentPage.logo}`);
        document.title = `${currentPage.name} - ${config.siteName}`;
      }
      
      let link = page !== currentPage ? (
          <Link to={page.url}>{page.name}</Link>
        ) : (
          page.name
        );

      links.push(<span>{link}</span>);
    }
  }
  return (
    <header class="Header">
      <img src={logo} className="Header-logo" alt="logo" />
      <div class="Header-links"> {links} </div>
    </header>
  );
}
