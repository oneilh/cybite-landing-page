const CoursePill = ({ icon, content, isActive, onClick }) => {
  return (
    <button
      className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 cursor-pointer ${
        isActive
          ? " bg-[var(--primary-border)] text-white shadow-md"
          : " bg-gray-200  dark:bg-slate-800 text-app hover:!bg-[var(--neutral-bg)]"
      }`}
      onClick={() => onClick(content)}
    >
      <div className="text-xl">{icon}</div>
      <span className="text-sm md:text-base font-medium">{content}</span>
    </button>
  );
};

export default CoursePill;
