const CopyRight = () => {
  return (
    <div className="border-t border-neutral mt-8 pt-8 text-sm text-neutral flex flex-col md:flex-row justify-between items-center">
      <p>© {new Date().getFullYear()} CompanyName. All rights reserved.</p>
      {/* <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-primary transition">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-primary transition">
          Terms of Service
        </a>
        <a href="#" className="hover:text-primary transition">
          Cookies
        </a>
      </div> */}
    </div>
  );
};

export default CopyRight;
