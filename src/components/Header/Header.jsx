import logo from "../../resources/color_logo_transparent.svg";
import React from "react";
import "./Header.css";

export default function(props) {
  return (
    <header class="Header">
      <img src={logo} className="Header-logo" alt="logo" />
      <div class="Header-links">
        <span>
          <a href="/">Code</a>
        </span>
        <span>
          <a href="/blog">Blog</a>
        </span>
        <span>
          <a href="/courses">Courses</a>
        </span>
      </div>
    </header>
  );
}
