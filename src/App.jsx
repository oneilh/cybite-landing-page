import "@mantine/core/styles.css";
import "./App.css";

import { MantineProvider } from "@mantine/core";

import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import WhyChooseUs from "./components/Why choose us/WhyChooseUs";
import Courses from "./components/Courses/Courses";
import TextTestimonalSlider from "./components/Testimonals/TextTestimonalSlider";
import CourseProjects from "./components/Course Projects/CourseProjects";
import StudentProject from "./components/Student Projects/StudentProject";
import KickStart from "./components/Kick start/KickStart";
import CohortAnnouncement from "./components/Next Cohort/CohortAnnouncement";

function App() {
  return (
    <MantineProvider>
      <main className="w-[90%] mx-auto mt-4 flex flex-col gap-16">
        <section className="flex flex-col gap-12">
          <Navigation />
          <Hero />
        </section>
        <WhyChooseUs />
        <Courses />
        <TextTestimonalSlider />
        <CourseProjects />
        <StudentProject />
        <KickStart />
        <CohortAnnouncement />
        <div></div>
        <div></div>
      </main>
    </MantineProvider>
  );
}

export default App;
