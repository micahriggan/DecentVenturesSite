import blogs from "../../constants/courses";
import React from "react";
import AppList from "../../components/Apps/Apps";
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
  return <AppList list={courses} action={courseLink} />;
}
