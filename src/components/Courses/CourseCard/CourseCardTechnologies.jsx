const CourseCardTechnologies = ({course}) => {
  let id= 0;
  return (
       <section className="flex flex-wrap gap-4">
              {course.technologies?.map((tech, index) => (
                <p className="bg-primary text-primary py-1 px-4 rounded-full" key={id++}>
                  {tech}
                </p>
              ))}
            </section>
  )
}

export default CourseCardTechnologies
