import BenefitCard from "./Card";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col gap-12">
      <div className="flex flex-col gap-4 text-center">
        <h2>Why Choose Us?</h2>
        <p>
          Our approach to teaching coding is built for the digital generation -
          interactive, relevant, and actually fun.
        </p>
      </div>
      <BenefitCard/>
    </section>
  );
};

export default WhyChooseUs;
