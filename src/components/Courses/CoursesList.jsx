import { useState } from "react";
import Course from "./Course";
import { IoCode } from "react-icons/io5";
import { LuServer } from "react-icons/lu";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsPalette } from "react-icons/bs";
const CoursesList = () => {
  const [activeCourse, setActiveCourse] = useState("FrontEnd Dev");

  const courses = [
    { icon: <IoCode />, content: "FrontEnd Dev" },
    { icon: <LuServer />, content: "BackEnd Dev" },
    { icon: <AiOutlineLineChart />, content: "Data Analysis" },
    { icon: <BsPalette />, content: "Visual & UX Design" },
  ];
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

export default CoursesList;
