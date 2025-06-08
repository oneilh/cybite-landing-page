import { Tabs } from "@mantine/core";
import Projects from "./Projects";

const CourseProjects = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className=" text-xl text-neutral">
        Projects completed{" "}
        <span className="text-primary">during the course</span>
      </h2>
      <Tabs defaultValue="All">
        <Tabs.List>
          <Tabs.Tab value="All">All</Tabs.Tab>
          <Tabs.Tab value="Frontend">Frontend</Tabs.Tab>
          <Tabs.Tab value="Visual and UX Design">Visual and UX Design</Tabs.Tab>
        </Tabs.List>

        <Projects />
      </Tabs>
    </section>
  );
};

export default CourseProjects;
