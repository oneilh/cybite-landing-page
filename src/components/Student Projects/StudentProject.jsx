import { IoRocket } from "react-icons/io5";
const StudentProject = () => {
  return (
    <section className="flex flex-col gap-8 card-pastel-blue p-8 rounded-2xl">
      <section className="flex flex-col gap-4">
        <h2>Student Challenges</h2>
        <p className="text-center">
          <IoRocket className="text-neutral text-xl inline border-red-400" />{" "}
          Push your limits with student & tutor-selected challenges!
        </p>
      </section>

      <div className="h-50 w-[95%] mx-auto border rounded-2xl flex flex-col justify-between sm:w-[300px]">
        <div></div>
        <p className="text-center text-sm cursor-pointer py-4 hover:underline">
          Discover the other projects
        </p>
      </div>
    </section>
  );
};

export default StudentProject;
