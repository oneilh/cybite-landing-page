import CTA_Buttons from "./CTA_Buttons";
import StatsCounter from "./StatsCounter";
const Hero = () => {
  return (
    <section className=" flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          Coding Education for{" "}
          <span className="text-primary ">Digital Natives</span>
        </h1>

        <div className="relative max-w-3xl">
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <span className="font-semibold text-primary">
              Break into tech fast.
            </span>{" "}
            Learn industry-relevant skills, build real projects, and get real
            results.{" "}
            <span className="italic">
              No fluff, just the stuff that matters.
            </span>
          </p>
        </div>

        <CTA_Buttons />
        <StatsCounter />
      </div>
    </section>
  );
};

export default Hero;
