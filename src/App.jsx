import "./App.css";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import WhyChooseUs from "./components/Why choose us/WhyChooseUs";

function App() {
  return (
    <main className="w-[90%] mx-auto mt-4 flex flex-col gap-16">
      <section className="flex flex-col gap-12">
        <Navigation />
        <Hero />
      </section>
      <WhyChooseUs/>
      <section></section>
    </main>
  );
}

export default App;
