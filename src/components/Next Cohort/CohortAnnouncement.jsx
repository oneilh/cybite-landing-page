import { FiCalendar, FiClock, FiUsers } from "react-icons/fi";
import DecorativeElement from "./DecorativeElement";
import { useModal } from "../../context/ModalContext";

const CohortAnnouncement = () => {
  const { openModal } = useModal();

  const startDate = new Date("June 28, 2025");
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

          {/* <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary border border-primary p-2">
              <FiClock className="text-xl text-primary-icon" />
            </div>
            <div>
              <p className="text-xs text-neutral">Duration</p>
              <p className="font-semibold">12 Weeks</p>
            </div>
          </div> */}

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
          <button
            className="transform rounded-lg bg-primary px-6 py-3 text-center font-medium app-text transition-all hover:scale-105 hover:shadow-lg focus:scale-105 active:scale-95 border border-primary cursor-pointer"
            onClick={openModal}
          >
            Apply Now
          </button>
          {/* <button className="rounded-lg border-2 border-primary-border bg-transparent px-6 py-3 text-center font-medium text-primary transition-all hover:bg-primary-bg hover:border-primary focus:bg-primary-bg cursor-pointer">
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CohortAnnouncement;
