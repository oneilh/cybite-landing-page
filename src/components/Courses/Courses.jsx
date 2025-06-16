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
      icon: <IoCode className="text-primary" />,
      content: "FrontEnd Dev",
      info: "70 lessons - 90hrs",
      price: "₦150,000",
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
    {
      icon: <LuServer className="text-primary" />,
      content: "BackEnd Dev",
      price: "₦150,000",
      info: "65 lessons - 85hrs",
      desc: "Master server-side development and database management for robust web applications.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "SQL",
        "APIs",
        "Authentication",
      ],
    },
    {
      icon: <AiOutlineLineChart className="text-primary" />,
      content: "Data Analysis",
      price: "₦150,000",
      info: "60 lessons - 80hrs",
      desc: "Unlock insights from data using powerful analysis tools and visualization techniques.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "Excel"],
    },
    {
      icon: <BsPalette className="text-primary" />,
      content: "Visual & UX Design",
      price: "₦150,000",
      info: "55 lessons - 75hrs",
      desc: "Create stunning visual designs and intuitive user experiences for digital products.",
      technologies: [
        "Adobe Photoshop",
        "Figma",
        "Corel Draw",
        "UI Principles",
        "Wireframing",
      ],
    },
  ];

  return (
    <section
      className="container mx-auto px-4 py-12 md:py-16 lg:py-20 max-w-6xl"
      id="courses"
    >
      <div className="flex flex-col gap-4 text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Our Courses
        </h2>
        <p className="text-neutral max-w-2xl mx-auto text-lg">
          Structured learning paths designed to take you from beginner to
          job-ready, with projects built for your portfolio.
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:gap-12">
        <CourseList
          courses={courses}
          activeCourse={activeCourse}
          setActiveCourse={setActiveCourse}
        />
        <CourseCard courses={courses} activeCourse={activeCourse} />
      </div>
    </section>
  );
};

export default Courses;
