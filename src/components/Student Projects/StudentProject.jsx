import { IoRocket } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";

const StudentProject = () => {
  return (
    <section className="relative overflow-hidden group bg-neutral p-8 rounded-3xl  border border-neutral backdrop-blur-sm">
      {/* Animated background elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-primary group-hover:scale-125 transition-transform duration-500"></div>

      <section className="relative flex flex-col items-center gap-6 text-center">
        {/* Header with animated rocket */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-3 bg-primary rounded-full blur-md group-hover:opacity-80 transition-opacity duration-300"></div>
            <IoRocket className="relative text-3xl text-primary animate-float" />
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--primary-icon)]">
            Build. Refine. Showcase
          </h2>
        </div>

        <p className="text-lg text-neutral max-w-md">
          Tutor-Approved Challenges with
          <span className="font-medium text-primary">
            {" "}
            3+ Production-Grade{" "}
          </span>
          to Push Your Limits
          <br />
        </p>
        <p className="font-medium text-primary">
          "Code → Validate → Ship – Your Curated Project Journey"
        </p>
      </section>

      {/* Challenge card with hover effect */}
      <div className="relative mt-8 h-48 w-full max-w-sm mx-auto bg-[var(--bg-app)]/90 backdrop-blur-sm rounded-2xl border border-neutral overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-app)] to-[var(--primary-bg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Card content */}
        <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-4 w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            <span className="text-2xl">🎯</span>
          </div>
          <p className="text-neutral mb-6">Featured challenge appears here</p>
        </div>

        {/* Bottom link with animated arrow */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-neutral py-3 bg-[var(--bg-app)]/80">
          <div className="flex items-center justify-center gap-1 text-primary hover:text-primary transition-colors cursor-pointer">
            <span className="font-medium">Discover all challenges</span>
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProject;
