const QuickLinks = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-neutral hover:text-primary transition">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="text-neutral hover:text-primary transition">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-neutral hover:text-primary transition">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="text-neutral hover:text-primary transition">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
