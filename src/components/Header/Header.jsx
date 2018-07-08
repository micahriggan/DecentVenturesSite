import logo from "../../resources/logo.svg";
import React from "react";
import "./Header.css";
import config from "../../constants/config";

export default function(props) {
  let currentPage;
  let links = [];
  let logo = "";
  for (let page of config.pages) {
    if (!page.disabled) {
      if (page.url === props.path) {
        currentPage = page;
        logo = require(`../../resources/${currentPage.logo}`);
        document.title = `${currentPage.name} - ${config.siteName}`;
      }

      let link = page !== currentPage ? (
          <a href={page.url}>{page.name}</a>
      ) : page.name;
 
      links.push(
        <span>
        {link}
        </span>
      );
    }
  }
  return (
    <header class="Header">
      <img src={logo} className="Header-logo" alt="logo" />
      <div class="Header-links"> {links} </div>
    </header>
  );
}
