import React from "react";
import AppList from "../../components/Apps/Apps";
import Header from "../../components/Header/Header";
import blogs from "../../constants/blog";
export default function(props) {
  const blogLink = url => (url ? <a href={url}>Read More on Medium</a> : "");

  return (
    <div>
      <Header path={props.location.pathname} />
      <AppList list={blogs} action={blogLink} />
    </div>
  );
}
