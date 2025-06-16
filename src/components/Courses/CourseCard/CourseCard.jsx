import CourseCardTechnologies from "./CourseCardTechnologies";
import CourseCardTitle from "./CourseCardTitle";
import { MdMenuBook } from "react-icons/md";

const CourseCard = ({ courses, activeCourse }) => {
  return (
    <section className="grid gap-6">
      {courses
        .filter((course) => course.content === activeCourse)
        .map((course) => (
          <div
            className="flex flex-col gap-5 p-6 md:p-8 rounded-xl bg-app border border-[var(--neutral-border)] shadow-sm hover:shadow-md transition-all duration-300"
            key={course.content}
          >
            <CourseCardTitle course={course} />

            <div className="flex gap-2 items-start">
              <MdMenuBook className="text-lg mt-0.5 text-neutral-icon" />
              <p className="text-sm text-neutral">{course.info}</p>
            </div>

            <p className="text-app">{course.desc}</p>

            <CourseCardTechnologies course={course} />

            <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center mt-2">
              <button className="text-primary hover:!text-[var(--primary-border)] text-sm font-medium transition-colors cursor-pointer">
                Learn More →
              </button>
              <button className="w-full sm:w-auto px-6 py-3 bg-[var(--primary-border)] hover:bg-[var(--primary-bg)] text-white font-medium rounded-md transition-colors cursor-pointer">
                Enroll Now - {course.price}
              </button>
            </div>
          </div>
        ))}
    </section>
  );
};

export default CourseCard;
