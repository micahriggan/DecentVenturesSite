import React from "react";
import Header from "../../components/Header/Header";
import AppList from "../../components/Posts/Posts";

const base = process.env.PUBLIC_URL;
export default function(props) {
  const githubLink = url =>
    url ? (
      <a href={url}>
        <img height="32" src={base + "/images/github.svg"} />
      </a>
    ) : (
      ""
    );

  return (
    <div>
      <Header path={props.location.pathname} />
      <AppList action={githubLink} />
    </div>
  );
}
