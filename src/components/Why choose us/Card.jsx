
import { offers } from "./offers";
import { AiTwotoneFire } from "react-icons/ai";
import { MdOutlineShowChart } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { LuCircleDotDashed } from "react-icons/lu";
import { SlEnergy } from "react-icons/sl";

const BenefitCard = () => {
  const icons = [
    <AiTwotoneFire />,
    <MdOutlineShowChart />,
    <TbMessages />,
    <LuCircleDotDashed />,
    <SlEnergy />,
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4 sm:px-6">
      {offers.map((offer) => {
        return (
          <div
            className={`flex flex-col gap-4 bg-gray-100 p-6 rounded-lg border hover:shadow-md transition-shadow ${offer.color}`}
            key={offer.id}
          >
            <section className="flex gap-4 items-center font-bold">
              <div className="text-2xl">{icons[offer.id - 1]}</div>
              <h3 className="text-lg sm:text-xl">{offer.title}</h3>
            </section>
            <p className="font-light text-sm sm:text-base">{offer.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BenefitCard;
