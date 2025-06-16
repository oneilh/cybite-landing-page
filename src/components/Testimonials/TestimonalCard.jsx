const TestimonalCard = ({ testimonal, overlay, open, setModalOpened }) => {
  const { name, role, text, image } = testimonal;
  function previewIMG() {
    setModalOpened(true);
    overlay(image);
    open();
  }
  return (
    <section className="h-fit min-w-full flex flex-col gap-6 justify-between border  border-blue-800 dark:border-blue-100 p-4 rounded-2xl cursor-grab">
      <p>{text}</p>
      <div className="flex gap-4 items-center object-cover">
        <div
          className="h-12 min-w-12 border border-blue-800  dark:border-blue-100  rounded-xl"
          onClick={previewIMG}
        >
          <img
            src={image}
            alt=""
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="font-semibold">{name}</p>
          <p className="text-sm font-light">{role}</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonalCard;
