const CourseCardTechnologies = ({ course }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {course.technologies?.map((tech, index) => (
        <span
          className="bg-[var(--neutral-bg)] text-neutral py-1 px-3 rounded-full text-xs font-medium"
          key={index}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default CourseCardTechnologies;
