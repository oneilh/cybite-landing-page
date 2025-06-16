import CompanyInfo from "./CompanyInfo";
import CopyRight from "./CopyRight";

import SocialMedia from "./Media/SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-neutral border-t border-neutral text-[var(--text-app)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <CompanyInfo />
          <SocialMedia />
        </div>

        {/* Copyright */}
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
