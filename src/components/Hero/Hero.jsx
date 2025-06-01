import FirstSection from "./FirstSection";

const Hero = () => {
  return (
    <section className="flex flex-col gap-8 py-12">
      <FirstSection />
      <section className="flex gap-4">
        <button className="btn bg-blue-700 text-white py-2 px-4 rounded-md cursor-pointer">
          Get Started
        </button>
        <button className="border border-primary text-primary py-2 px-4 rounded-md cursor-pointer">
          Explore Courses
        </button>
      </section>
    </section>
  );
};

export default Hero;
