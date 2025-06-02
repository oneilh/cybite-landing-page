const CoursePill = ({ icon, content, isActive, onClick }) => {
  const activeClass = "bg-blue-700 text-white";
  const inactiveClass = "bg-primary text-primary";

  return (
    <section
      className={`flex gap-2 items-center w-fit px-4 py-2 rounded-full ${
        isActive ? activeClass : inactiveClass
      }  cursor-pointer `}
      onClick={() => onClick(content)}
    >
      <div className="text-xl">{icon}</div>
      <p>{content}</p>
    </section>
  );
};

export default CoursePill;
