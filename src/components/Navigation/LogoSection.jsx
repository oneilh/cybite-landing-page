

const LogoSection = () => {
  return (
    <section className="flex gap-4 items-center">
      <img
        src="/logo.png"
        alt="Cybite Academy Logo"
        height={40}
        width={40}
        className="cursor-pointer hover:scale-105 transition-transform"
      />
      <h2 className="logo text-xl font-bold text-gray-800 dark:text-white">
        Cybite Academy
      </h2>
    </section>
  );
};

export default LogoSection;
