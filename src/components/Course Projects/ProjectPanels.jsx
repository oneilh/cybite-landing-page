import { Tabs } from "@mantine/core";

import CourseSlider from "./CourseSlider";

const ProjectPanels = () => {
  return (
    <>
      <Tabs.Panel value="All">
        <CourseSlider value='All'/>
      </Tabs.Panel>
      <Tabs.Panel value="Frontend">
        <CourseSlider value= "Frontend"/>
      </Tabs.Panel>
    </>
  );
};

export default ProjectPanels;
