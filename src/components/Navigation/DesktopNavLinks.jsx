import { navLinks } from "./Links";

const DesktopNavLinks = () => {
  return (
    <ul className="flex space-x-8">
      {navLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNavLinks;
