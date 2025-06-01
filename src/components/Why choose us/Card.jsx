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
    <section className="flex flex-col gap-4 w-[80%] min-w-[250px] mx-auto">
      {offers.map((offer) => {
        return (
          <div className={"flex flex-col gap-4 bg-gray-300 p-6 pb-12 rounded-lg border "+offer.color} key={offer.id}>
            <section className="flex gap-4 items-center font-bold">
              <div className="text-[24px]">
                {icons[offer.id - 1]}
              </div>
              <h3>{offer.title}</h3>
            </section>
            <p className="font-light">{offer.text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default BenefitCard;
