import { useModal } from "../../context/ModalContext";
import { navLinks } from "./Links";

const MobileMenu = ({ scrolled, setIsOpen }) => {
  const { openModal } = useModal();
  return (
    <div
      className={`md:hidden mt-4 pb-4 ${
        scrolled ? "bg-white dark:bg-gray-900" : "bg-white dark:bg-gray-900"
      } rounded-lg shadow-lg`}
    >
      <ul className="flex flex-col space-y-4">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors mt-2 cursor-pointer"
            onClick={openModal}
          >
            Get Started
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
