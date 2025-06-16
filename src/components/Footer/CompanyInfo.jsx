const CompanyInfo = () => {
  return (
    <div className="md:col-span-2">
      <div className="flex items-center gap-6 mb-4">
        <img src="/logo.png" alt="Cybite Academy logo" className="w-8 h-8" />
        <h2 className="text-xl font-bold">Cybite Academy</h2>
      </div>
      <div>
        <a
          href="https://maps.app.goo.gl/26kTU9ymtCKFQR937"
          className="mb-2 text-neutral"
          target="_blank"
        >
          <b>NSPRI Building</b> 32 Barikisu Iyede St, Yaba, Lagos 101245, Lagos
        </a>
      </div>
      <div>
        <a href="tel:09061978141" className="mb-2 text-neutral">
          Phone: 09061978141
        </a>
      </div>
      {/* <p className="text-neutral">Email: info@company.com</p> */}
    </div>
  );
};

export default CompanyInfo;
