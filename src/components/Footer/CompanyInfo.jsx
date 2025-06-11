const CompanyInfo = () => {
  return (
    <div className="md:col-span-2">
      <div className="flex items-center gap-4 mb-4">
        <img src="/logo.png" alt="Cybite Academy logo" className="w-8 h-8" />
        <h2 className="text-xl font-bold">Cybite Academy</h2>
      </div>
      <p className="mb-2 text-neutral">
        123 Business Street, Tech City, TC 10001
      </p>
      <p className="mb-2 text-neutral">Phone: +1 (555) 123-4567</p>
      <p className="text-neutral">Email: info@company.com</p>
    </div>
  );
};

export default CompanyInfo;
