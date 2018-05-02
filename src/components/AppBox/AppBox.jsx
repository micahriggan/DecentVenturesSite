import * as React from "react";
import "./AppBox.css";

const AppBox = props => {
  const githubLink = props.github ? (
    <a href={props.github}>
      <img height="32" src="images/github.svg" />
    </a>
  ) : (
    ""
  );
  const appBox = (
    <div class="appname">
      <div class="appNameText">{props.name}</div>
    </div>
  );

  const appLink = props.url ? <a href={props.url}>{appBox}</a> : appBox;
  return (
    <div class="appbox">
      <div class="logo">
        <img src={props.logo} height="200" />
      </div>
      <div class="github">{githubLink}</div>
      {appLink}
    </div>
  );
};

export default AppBox;
//<AppBox logo={someLogo} name={someName} />
