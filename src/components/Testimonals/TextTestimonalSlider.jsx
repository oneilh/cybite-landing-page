import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { textTestimonals } from "./textTestimonals";
import TestimonalCard from "./TestimonalCard";

const TextTestimonalSlider = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-left text-xl">What Our Students Say</h2>
        <p>
          Hear from the students who've transformed their careers through our
          courses.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={36}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet my-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active my-active-bullet",
        }}
        autoplay={{ delay: 5000 }}
        className="w-full"
      >
        {textTestimonals.map((testimonal) => (
          <SwiperSlide key={testimonal.id} className="pb-8">
            <TestimonalCard testimonal={testimonal} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TextTestimonalSlider;
