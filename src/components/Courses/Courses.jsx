import { useState } from "react";
import CourseList from "./CourseList";
import { IoCode } from "react-icons/io5";
import { LuServer } from "react-icons/lu";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsPalette } from "react-icons/bs";
import CourseCard from "./CourseCard/CourseCard";

const Courses = () => {
  const [activeCourse, setActiveCourse] = useState("FrontEnd Dev");
  const courses = [
    {
      icon: <IoCode />,
      content: "FrontEnd Dev",
      info: '70 lessons - 90hrs',
      price: "N150,000",
      desc: "Learn to build beautiful, interactive user interfaces with modern web technologies.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "GitHub",
        "Bootstrap",
        "TailwindCSS",
        "React",
      ],
    },

    { icon: <LuServer />, content: "BackEnd Dev", price: "N150,000" },
    {
      icon: <AiOutlineLineChart />,
      content: "Data Analysis",
      price: "N150,000",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "GitHub",
        "Bootstrap",
        "TailwindCSS",
        "React",
      ],
    },
    {
      icon: <BsPalette />,
      content: "Visual & UX Design",
      price: "N150,000",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "GitHub",
        "Bootstrap",
        "TailwindCSS",
        "React",
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-12" id="courses">
      <div className="flex flex-col gap-4">
        <h2>Our Courses</h2>
        <p className="text-center">
          Structured learning paths designed to take you from beginner to
          job-ready, with projects built for your portfolio.
        </p>
      </div>

      <CourseList
        courses={courses}
        activeCourse={activeCourse}
        setActiveCourse={setActiveCourse}
      />
      <CourseCard
        courses={courses}
        activeCourse={activeCourse}
      />
    </section>
  );
};

export default Courses;
