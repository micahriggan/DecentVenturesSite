import React from "react";
import Posts from "../../components/Posts/Posts";
import Header from "../../components/Header/Header";
import blogs from "../../constants/blogs";
export default function(props) {
  const blogLink = url => (url ? <a href={url}>Read More on Medium</a> : "");

  return (
    <div>
      <Header path={props.location.pathname} />
      <Posts list={blogs} action={blogLink} />
    </div>
  );
}
