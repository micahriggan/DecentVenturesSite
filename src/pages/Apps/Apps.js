import React from "react";
import AppList from '../../components/Apps/Apps';

export default function(props) {
  const githubLink = (url) => url ? (
    <a href={url}>
      <img height="32" src="images/github.svg" />
    </a>
  ) : (
    ""
  );


  return <AppList action={githubLink}/>;
}
