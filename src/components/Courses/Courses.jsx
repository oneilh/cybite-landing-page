import { useState } from "react"
import CourseList from "./CourseList"

const Courses = () => {
  useState(false)
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">

      <h2>Our Courses</h2>
      <p className="text-center">Structured learning paths designed to take you from beginner to job-ready, with projects built for your portfolio.</p>
      </div>

      <CourseList/>
    </section>
  )
}

export default Courses
