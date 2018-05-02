import * as React from "react";
import AppList from "../../constants/apps";
import AppBox from "../AppBox/AppBox";
import "./Apps.css";

class Apps extends React.Component {
  render() {
    let AppComponents = AppList.map(app => {
      return (
        <AppBox
          name={app.name}
          logo={app.logo}
          github={app.github}
          url={app.url}
        />
      );
    });
    return <div class="Apps">{AppComponents}</div>;
  }
}
export default Apps;
