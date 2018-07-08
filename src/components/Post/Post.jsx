import * as React from "react";
import "./Post.css";

const Post = props => {
  return (
    <div class="post">
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

export default Post;
//<Post logo={someLogo} name={someName} />
