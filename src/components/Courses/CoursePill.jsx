const CoursePill = ({ icon, content, isActive, onClick }) => {
  return (
    <button
      className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 cursor-pointer ${
        isActive
          ? " bg-[var(--primary-border)] text-white shadow-md"
          : "bg-[var(--neutral-bg)] hover:bg-gray-200 hover:dark:bg-slate-800 text-app"
      }`}
      onClick={() => onClick(content)}
    >
      <div className="text-xl">{icon}</div>
      <span className="text-sm md:text-base font-medium">{content}</span>
    </button>
  );
};

export default CoursePill;
