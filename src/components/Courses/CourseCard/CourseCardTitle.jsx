const CourseCardTitle = ({ course }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      <div className="flex gap-3 items-center">
        <div className="text-2xl bg-[var(--primary-bg)] text-[var(--primary-icon)] p-2.5 rounded-lg">
          {course.icon}
        </div>
        <h1 className="text-xl font-bold text-app">{course.name}</h1>
      </div>
      <h3 className="text-xl font-bold text-primary">{course.price}</h3>
    </div>
  );
};

export default CourseCardTitle;
