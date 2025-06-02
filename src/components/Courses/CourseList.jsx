import { useState } from "react";
import Course from "./CoursePill";

const CourseList = ({ courses, activeCourse, setActiveCourse }) => {
  const handleCourseClick = (courseContent) => {
    setActiveCourse(courseContent);
  };

  return (
    <section className="flex flex-wrap gap-2.5 justify-around">
      {courses.map((course) => (
        <Course
          key={course.content}
          icon={course.icon}
          content={course.content}
          isActive={activeCourse === course.content}
          onClick={handleCourseClick}
        />
      ))}
    </section>
  );
};

export default CourseList;
