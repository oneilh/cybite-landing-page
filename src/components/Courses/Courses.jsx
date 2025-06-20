import { useState } from "react";
import CourseList from "./CourseList";
// import { IoCode } from "react-icons/io5";
// import { LuServer } from "react-icons/lu";
// import { AiOutlineLineChart } from "react-icons/ai";
// import { BsPalette } from "react-icons/bs";
import CourseCard from "./CourseCard/CourseCard";
import { courses } from "./AllCourses";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Courses component renders a section displaying available courses.
 * It includes a list of courses and details for the currently active course.
 * Uses CourseList for displaying course names and CourseCard for detailed view.
 * 
 * @returns A section element containing a header, description, a list of courses,
 * and detailed information about the selected course.
 */

/*******  d1a35f58-1191-4381-bb27-f66879416380  *******/
const Courses = () => {
  const [activeCourse, setActiveCourse] = useState("FrontEnd Dev");
  // const courses = [
  //   {
  //     id: 1,
  //     icon: <IoCode className="text-primary" />,
  //     name: "FrontEnd Dev",
  //     info: "70 lessons - 90hrs",
  //     price: "₦150,000",
  //     desc: "Learn to build beautiful, interactive user interfaces with modern web technologies.",
  //     technologies: [
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "Git",
  //       "GitHub",
  //       "Bootstrap",
  //       "TailwindCSS",
  //       "React",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     icon: <LuServer className="text-primary" />,
  //     name: "BackEnd Dev",
  //     price: "₦150,000",
  //     info: "65 lessons - 85hrs",
  //     desc: "Master server-side development and database management for robust web applications.",
  //     technologies: [
  //       "Node.js",
  //       "Express",
  //       "MongoDB",
  //       "SQL",
  //       "APIs",
  //       "Authentication",
  //     ],
  //   },
  //   {
  //     id: 3,
  //     icon: <AiOutlineLineChart className="text-primary" />,
  //     name: "Data Analysis",
  //     price: "₦150,000",
  //     info: "60 lessons - 80hrs",
  //     desc: "Unlock insights from data using powerful analysis tools and visualization techniques.",
  //     technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "Excel"],
  //   },
  //   {
  //     id: 4,
  //     icon: <BsPalette className="text-primary" />,
  //     name: "Visual & UX Design",
  //     price: "₦150,000",
  //     info: "55 lessons - 75hrs",
  //     desc: "Create stunning visual designs and intuitive user experiences for digital products.",
  //     technologies: [
  //       "Adobe Photoshop",
  //       "Figma",
  //       "Corel Draw",
  //       "UI Principles",
  //       "Wireframing",
  //     ],
  //   },
  // ];

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
