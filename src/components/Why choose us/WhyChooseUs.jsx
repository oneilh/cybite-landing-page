import BenefitCard from "./Card";
const WhyChooseUs = () => {
  return (
    <section className="flex flex-col gap-8 md:gap-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-3 md:gap-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Why Choose Us?
        </h2>
        <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-neutral">
          Our approach to teaching coding is built for the digital generation -
          interactive, relevant, and actually fun.
        </p>
      </div>
      <BenefitCard />
    </section>
  );
};

export default WhyChooseUs;
