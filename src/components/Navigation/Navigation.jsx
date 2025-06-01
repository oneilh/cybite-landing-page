import { FiMoon } from "react-icons/fi";
import { HiMenuAlt2 } from "react-icons/hi";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center">
      <section className="flex gap-4 items-center">
        <img
          src="/logo.png"
          alt=""
          height={32}
          width={32}
          className="cursor-pointer"
        />
        <h2 className="logo">Cybite Academy</h2>
      </section>

      <section className="flex gap-8 text-2xl">
        <FiMoon className="cursor-pointer" />
        <HiMenuAlt2 className="cursor-pointer" />
      </section>
    </nav>
  );
};

export default Navigation;
