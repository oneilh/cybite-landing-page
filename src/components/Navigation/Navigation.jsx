import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { useModal } from "../../context/ModalContext";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileMenu from "./MobileMenu";
import LogoSection from "./LogoSection";
import ThemeBtn from "./ThemeBtn";

const Navigation = () => {
  const { openModal } = useModal();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Initialize darkMode state based on localStorage or system preference
  // This function runs only once on initial render
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      console.log(
        "Initial state check: Stored theme from localStorage =",
        storedTheme
      );
      if (storedTheme !== null) {
        // Check if 'theme' exists in localStorage
        return storedTheme === "dark";
      }
      // If no stored theme, check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      console.log(
        "Initial state check: System prefers dark mode =",
        prefersDark
      );
      return prefersDark;
    }
    // Default to false (light mode) if window is not defined (e.g., during SSR)
    return false;
  });

  // useEffect to synchronize the 'dark' class on <html> and localStorage with darkMode state
  useEffect(() => {
    console.log("useEffect triggered. Current darkMode state:", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("Class 'dark' added to html. localStorage set to 'dark'.");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log(
        "Class 'dark' removed from html. localStorage set to 'light'."
      );
    }
  }, [darkMode]); // This effect runs whenever 'darkMode' state changes

  // Effect for scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    console.log("Toggle button clicked!");
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      console.log("setDarkMode called. New state will be:", newMode);
      return newMode;
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-900 shadow-md py-2"
          : "bg-white dark:bg-gray-900 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <LogoSection />

          {/* Desktop Navigation */}
          <section className="hidden md:flex items-center gap-8">
            <DesktopNavLinks />

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FiSun className="text-xl text-yellow-400" />
              ) : (
                <FiMoon className="text-xl text-gray-700" />
              )}
            </button>

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              onClick={openModal}
            >
              Get Started
            </button>
          </section>

          {/* Mobile Menu Button */}
          <section className="flex md:hidden gap-4 items-center">
            <ThemeBtn darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="cursor-pointer" />
              ) : (
                <HiMenuAlt2 className="cursor-pointer" />
              )}
            </button>
          </section>
        </div>

        {/* Mobile Menu */}
        {isOpen && <MobileMenu setIsOpen={setIsOpen} scrolled={scrolled} />}
      </div>
    </nav>
  );
};

export default Navigation;
