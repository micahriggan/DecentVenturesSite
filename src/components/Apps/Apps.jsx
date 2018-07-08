import * as React from "react";
import AppList from "../../constants/apps";
import AppBox from "../AppBox/AppBox";
import "./Apps.css";

class Apps extends React.Component {
  render() {
    let toList = this.props.list || AppList;
    let AppComponents = toList.map(app => {
      return <AppBox {...app} action={this.props.action} />;
    });
    return <div class="Apps">{AppComponents}</div>;
  }
}
export default Apps;
