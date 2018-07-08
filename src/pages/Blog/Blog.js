import React from "react";
import AppList from "../../components/Apps/Apps";
import blogs from "../../constants/blog";
export default function(props) {
  const blogLink = url => (url ? <a href={url}>Read More on Medium</a> : "");

  return <AppList list={blogs} action={blogLink} />;
}
