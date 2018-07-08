import blogs from "../../constants/courses";
import React from "react";
import AppList from "../../components/Apps/Apps";
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
      <AppList list={courses} action={courseLink} />
    </div>
  );
}
