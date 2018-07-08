import * as React from "react";
import PostList from "../../constants/posts";
import Post from "../Post/Post";
import "./Posts.css";

class Posts extends React.Component {
  render() {
    let toList = this.props.list || PostList;
    let PostComponents = toList.map(app => {
      return <Post {...app} action={this.props.action} />;
    });
    return <div class="Posts">{PostComponents}</div>;
  }
}
export default Posts;
