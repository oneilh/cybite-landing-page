import { FiMoon, FiSun } from "react-icons/fi";
const ThemeBtn = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
      aria-label="Toggle dark mode "
    >
      {darkMode ? (
        <FiSun className="text-xl text-yellow-400" />
      ) : (
        <FiMoon className="text-xl text-gray-700" />
      )}
    </button>
  );
};

export default ThemeBtn;
