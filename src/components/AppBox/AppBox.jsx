import * as React from "react";
import "./AppBox.css";

const AppBox = props => {
  const appBox = (
    <div class="appname">
      <div class="appNameText">{props.name}</div>
    </div>
  );

  return (
    <div class="appbox">
      <div>
        <a href={props.url}><h1>{props.name}</h1></a>
      </div>
      <p>
        <span>{props.desc}</span>
      </p>
      <div>
        <span>{props.action ?  props.action(props.actionUrl) : ''}</span>
      </div>
    </div>
  );
};

export default AppBox;
//<AppBox logo={someLogo} name={someName} />
