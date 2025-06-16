const CTA_Buttons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      <button className="px-8 py-3 bg-[var(--primary)] text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg cursor-pointer">
        Get Started <a href=""></a>
      </button>
      <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/10 font-medium rounded-lg transition-all transform hover:scale-105 cursor-pointer">
        <a href="#courses">Explore Courses</a>
      </button>
    </div>
  );
};

export default CTA_Buttons;
