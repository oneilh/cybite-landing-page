import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";

import { FiExternalLink } from "react-icons/fi";

import { projects } from "./projectList";
import "swiper/css";

const CourseSlider = ({ value }) => {
  function filterProjects(filteredValue) {
    return projects
      .filter((p) => p.category === filteredValue)
      .map((p) => (
        <SwiperSlide key={p.id} className="!w-68 cursor-pointer">
          <div className="rounded-2xl w-full h-[170px]  border border-neutral overflow-hidden">
            <img src={p.previewImg} className="object-cover w-full h-full" />
          </div>
          <section className="flex justify-between items-center w-[90%] mx-auto border border-neutral border-t-0 p-3 rounded-es-2xl rounded-ee-2xl">
            <div className="flex flex-col text-sm">
              <p className="font-medium hover:underline">
                <a href={p.liveLink} target="_blank">
                  {p.name}
                </a>
              </p>
              <p>{p.category}</p>
            </div>
            <a href={p.liveLink} target="_blank">
              <FiExternalLink className="text-lg hover:text-[var(--primary)]" />
            </a>
          </section>
        </SwiperSlide>
      ));
  }

  const allProjects = projects.map((p) => {
    return (
      <SwiperSlide key={p.id} className="!w-68 cursor-pointer">
        <div className="rounded-2xl w-full h-[170px]  border border-neutral overflow-hidden">
          <img src={p.previewImg} className="object-cover w-full h-full" />
        </div>
        <section className="flex justify-between items-center w-[90%] mx-auto border border-neutral border-t-0 p-3 rounded-es-2xl rounded-ee-2xl">
          <div className="flex flex-col text-sm">
            <p className="font-medium hover:underline hover:text-[var(--primary)]">
              <a href={p.liveLink} target="_blank">
                {p.name}
              </a>
            </p>
            <p>{p.category}</p>
          </div>
          <a href={p.liveLink} target="_blank">
            <FiExternalLink className="text-lg hover:text-[var(--primary)]" />
          </a>
        </section>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      slidesPerView={"auto"}
      slidesPerGroup={2}
      spaceBetween={20}
      slidesOffsetBefore={20}
      slidesOffsetAfter={20}
      className="mt-12"
    >
      {value == "All" ? allProjects : filterProjects("Frontend")}
    </Swiper>
  );
};

export default CourseSlider;
