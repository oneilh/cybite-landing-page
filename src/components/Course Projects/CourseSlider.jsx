import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";

import { FiExternalLink } from "react-icons/fi";

import { project } from "./project";
import "swiper/css";

const CourseSlider = ({ value }) => {
  function filterProjects(filteredValue) {
    return project
      .filter((p) => p.category === filteredValue)
      .map((p) => (
        <SwiperSlide key={p.id} className="!w-68 cursor-pointer">
        <img
          src={p.previewImg}
          className="rounded-2xl w-full h-auto object-cover border border-neutral"
        ></img>
        <section className="flex justify-between items-center w-[90%] mx-auto border border-neutral border-t-0 p-3 rounded-es-2xl rounded-ee-2xl">
          <div className="flex flex-col text-sm">
            <p className="font-medium"> {p.name}</p>
            <p>{p.category}</p>
          </div>
          <FiExternalLink className="text-lg" />
        </section>
      </SwiperSlide>
      ));
  }

  const allProjects = project.map((p) => {
    return (
      <SwiperSlide key={p.id} className="!w-68 cursor-pointer">
        <img
          src={p.previewImg}
          className="rounded-2xl w-full h-auto object-cover border border-neutral"
        ></img>
        <section className="flex justify-between items-center w-[90%] mx-auto border border-neutral border-t-0 p-3 rounded-es-2xl rounded-ee-2xl">
          <div className="flex flex-col text-sm">
            <p className="font-medium"> {p.name}</p>
            <p>{p.category}</p>
          </div>
          <FiExternalLink className="text-lg" />
        </section>
      </SwiperSlide>
    );
  });
/*
  <SwiperSlide key={p.id} className="!w-68 cursor-grab active:cursor-grabbing transition-transform duration-300 hover:scale-[1.02]">
  <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img
      src={p.previewImg}
      className="rounded-t-2xl w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
      alt={p.name}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <section className="flex justify-between items-center w-full bg-white dark:bg-slate-800 p-4 rounded-b-2xl border-t-0">
      <div className="flex flex-col">
        <p className="font-semibold text-slate-800 dark:text-white">{p.name}</p>
        <p className="text-sm text-slate-600 dark:text-slate-300">{p.category}</p>
      </div>
      <FiExternalLink className="text-lg text-primary hover:text-primary-icon transition-colors" />
    </section>
  </div>
</SwiperSlide>
*/

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
