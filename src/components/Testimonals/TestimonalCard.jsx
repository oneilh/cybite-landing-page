const TestimonalCard = ({ testimonal }) => {
  const { name, role, text, image } = testimonal;
  return (
    <section className="h-fit min-w-full flex flex-col gap-6 justify-between border  border-blue-300 dark:border-blue-100 p-4 rounded-2xl">
      <p>{text}</p>
      <div className="flex gap-4 items-center">
        <img
          src=""
          alt=""
          className="h-12 w-12 border border-blue-300  dark:border-blue-100  rounded-full"
        />
        <div className="flex flex-col gap-0.5">
          <p className="font-semibold">{name}</p>
          <p className="text-sm">{role}</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonalCard;
