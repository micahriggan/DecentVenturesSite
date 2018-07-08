import React from "react";
import Posts from "../../components/Posts/Posts";
import Header from "../../components/Header/Header";
import courses from "../../constants/courses";
import "./Courses.css";
export default function(props) {
  const courseLink = url =>
    url ? (
      <a href={url}>
        <button class="courseButton">Checkout this course</button>
      </a>
    ) : (
      ""
    );
  return (
    <div>
      <Header path={props.location.pathname} />
      <Posts list={courses} action={courseLink} />
    </div>
  );
}
