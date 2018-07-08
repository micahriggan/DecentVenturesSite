import React from "react";
import "./Footer.css";
import config from "../../constants/config.js";

export default function() {
  return (
    <div class="footer">
      <a href={config.github}>
        <img height="32" src="images/github.svg" />
      </a>
      <a href={config.twitter}>
        <img height="32" src="images/twitter.svg" />
      </a>
    </div>
  );
}
