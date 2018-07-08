import React from "react";
import "./Footer.css";
import config from "../../constants/config.js";

const base = process.env.PUBLIC_URL;
export default function() {
  return (
    <div class="footer">
      <a href={config.github}>
        <img height="32" src={base + "/images/github.svg"} />
      </a>
      <a href={config.twitter}>
        <img height="32" src={base + "/images/twitter.svg"} />
      </a>
    </div>
  );
}
