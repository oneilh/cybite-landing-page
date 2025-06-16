import { useState } from "react";
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

import { useDisclosure } from "@mantine/hooks";

import { textTestimonals } from "./textTestimonials";
import TestimonalCard from "./TestimonalCard";
import TextTestimonialModal from "./TextTestimonialModal";

const TextTestimonialSlider = () => {
  const [opened, { open, close }] = useDisclosure(true);
  const [image, setImage] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-left text-xl">What Our Students Say</h2>
        <p className="text-neutral">
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
        breakpoints={{
          640: {
            slidesPerView: 2,
          },

          1025: {
            slidesPerView: 3,
          },
        }}
        className="w-full"
      >
        {textTestimonals.map((testimonal) => (
          <SwiperSlide key={testimonal.id} className="pb-8">
            <TestimonalCard
              testimonal={testimonal}
              overlay={setImage}
              open={open}
              setModalOpened={setModalOpened}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <TextTestimonialModal
        image={image}
        opened={opened}
        close={close}
        modalOpened={modalOpened}
      />
    </section>
  );
};

export default TextTestimonialSlider;
