import { useState } from "react"
import CoursesList from "./CoursesList"

const Courses = () => {
  useState(false)
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">

      <h2>Our Courses</h2>
      <p className="text-center">Structured learning paths designed to take you from beginner to job-ready, with projects built for your portfolio.</p>
      </div>

      <CoursesList/>
    </section>
  )
}

export default Courses
