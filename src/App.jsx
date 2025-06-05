import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import WhyChooseUs from "./components/Why choose us/WhyChooseUs";
import Courses from "./components/Courses/Courses";
import TextTestimonalSlider from "./components/Testimonals/TextTestimonalSlider";

function App() {
  return (
    <main className="w-[90%] mx-auto mt-4 flex flex-col gap-16">
      <section className="flex flex-col gap-12">
        <Navigation />
        <Hero />
      </section>
      <WhyChooseUs />
      <Courses />
      <TextTestimonalSlider />
      <div></div>
      <div></div>
    </main>
  );
}

export default App;
