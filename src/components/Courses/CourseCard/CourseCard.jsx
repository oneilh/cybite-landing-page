import "./../../../Cards.css";
import CourseCardTechnologies from "./CourseCardTechnologies";
import CourseCardTitle from "./CourseCardTitle";
import { MdMenuBook } from "react-icons/md";
const CourseCard = ({ courses, activeCourse }) => {
  return (
    <section className="flex flex-col gap-4">
      {courses
        .filter((course) => course.content === activeCourse)
        .map((course) => (
          <div
            className="flex flex-col gap-5 p-8 rounded-lg card-pastel-blue"
            key={course.content}
          >
            <CourseCardTitle course={course} />
            <div className=" flex gap-2 items-center">
              <MdMenuBook className="text-lg" />
              <p className="text-sm">{course.info}</p>
            </div>
        
              <p>{course.desc}</p>
              <span className="underline card-view-more cursor-pointer">
                Learn More
              </span>
       
            <CourseCardTechnologies course={course} />
            <div className="card-cta p-2 rounded-md text-center cursor-pointer bg-blue-600 hover:bg-blue-200">
              Enroll Now
            </div>
          </div>
        ))}
    </section>
  );
};

export default CourseCard;
