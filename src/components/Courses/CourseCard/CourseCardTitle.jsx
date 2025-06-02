const CourseCardTitle = ({course }) => {
  return (
    <section className="flex gap-4 items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className="text-2xl  bg-primary text-primary p-2.5 rounded-lg">
          {course.icon}
        </div>
        <h1 className="text-xl">{course.content}</h1>
      </div>
      <h3 className="text-xl font-medium card-price">{course.price}</h3>
    </section>
  );
};

export default CourseCardTitle;
