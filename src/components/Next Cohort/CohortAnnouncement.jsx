// import { FiCalendar, FiClock, FiUsers } from "react-icons/fi";

// const CohortAnnouncement = () => {
//   const startDate = new Date("June 25, 2025");
//   const today = new Date();
//   const daysRemaining = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));

//   return (
//     <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white shadow-xl transition-all hover:shadow-2xl">
//       {/* Decorative elements */}
//       <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10"></div>
//       <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-white/5"></div>

//       <div className="relative z-10">
//         <div className="mb-6 animate-pulse">
//           <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium">
//             New Cohort Starting Soon!
//           </span>
//         </div>

//         <h2 className="mb-4 text-3xl font-bold md:text-4xl">
//           Join Our Next Cohort <br />
//           <span className="text-yellow-300">June 25, 2025</span>
//         </h2>

//         <div className="mb-8 grid grid-cols-3 gap-4">
//           <div className="flex items-center gap-2">
//             <div className="rounded-lg bg-white/10 p-2">
//               <FiCalendar className="text-xl" />
//             </div>
//             <div>
//               <p className="text-xs opacity-80">Starts In</p>
//               <p className="font-semibold">{daysRemaining} Days</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2">
//             <div className="rounded-lg bg-white/10 p-2">
//               <FiClock className="text-xl" />
//             </div>
//             <div>
//               <p className="text-xs opacity-80">Duration</p>
//               <p className="font-semibold">12 Weeks</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2">
//             <div className="rounded-lg bg-white/10 p-2">
//               <FiUsers className="text-xl" />
//             </div>
//             <div>
//               <p className="text-xs opacity-80">Seats</p>
//               <p className="font-semibold">Limited</p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col gap-4 sm:flex-row">
//           <button className="transform rounded-lg bg-white px-6 py-3 text-center font-medium text-indigo-600 transition-all hover:scale-105 hover:shadow-lg focus:scale-105 active:scale-95">
//             Apply Now
//           </button>
//           <button className="rounded-lg border-2 border-white/30 bg-transparent px-6 py-3 text-center font-medium text-white transition-all hover:border-white hover:bg-white/10 focus:bg-white/10">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CohortAnnouncement;

import { FiCalendar, FiClock, FiUsers } from "react-icons/fi";
import DecorativeElement from "./DecorativeElement";

const CohortAnnouncement = () => {
  const startDate = new Date("June 25, 2025");
  const today = new Date();
  const daysRemaining = Math.ceil((startDate - today) / (1000 * 60 * 60 * 24));

  return (
    <div className="relative overflow-hidden rounded-2xl bg-primary border border-primary p-8 text-app shadow-lg transition-all hover:shadow-xl">
      <DecorativeElement />

      <div className="relative z-10 flex flex-col gap-6">
        <div className="mb-6 animate-pulse">
          <span className="inline-block rounded-full bg-primary border border-primary px-4 py-1 text-sm font-medium text-primary">
            New Cohort Starting Soon!
          </span>
        </div>

        <h2 className="mb-4 text-3xl font-bold md:text-4xl font-manrope">
          Join Our Next Cohort <br />
          <span className="text-primary">June 25, 2025</span>
        </h2>

        <div className="mb-8 flex flex-wrap gap-4 justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary border border-primary p-2">
              <FiCalendar className="text-xl text-primary-icon" />
            </div>
            <div>
              <p className="text-xs text-neutral">Starts In</p>
              <p className="font-semibold">{daysRemaining} Days</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary border border-primary p-2">
              <FiClock className="text-xl text-primary-icon" />
            </div>
            <div>
              <p className="text-xs text-neutral">Duration</p>
              <p className="font-semibold">12 Weeks</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary border border-primary p-2">
              <FiUsers className="text-xl text-primary-icon" />
            </div>
            <div>
              <p className="text-xs text-neutral">Seats</p>
              <p className="font-semibold">Limited</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="transform rounded-lg bg-primary px-6 py-3 text-center font-medium app-text transition-all hover:scale-105 hover:shadow-lg focus:scale-105 active:scale-95 border border-primary cursor-pointer">
            Apply Now
          </button>
          <button className="rounded-lg border-2 border-primary-border bg-transparent px-6 py-3 text-center font-medium text-primary transition-all hover:bg-primary-bg hover:border-primary focus:bg-primary-bg cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CohortAnnouncement;
