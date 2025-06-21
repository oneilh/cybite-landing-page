import { GoStack } from "react-icons/go";
import { MdSpeed } from "react-icons/md";
import { GrConfigure } from "react-icons/gr";

const KickStart = () => {
  const kickStarts = [
    {
      id: 1,
      title: "Learn Faster. Build Sooner.",
      text: "Learn the basics in a structured way → Level up → Build.",
      icon: <GoStack className="text-2xl" />,
      iconBg: "bg-primary",
      iconColor: "text-primary",
    },
    {
      id: 2,
      title: "Accelerate Your Learning",
      text: "For driven beginners: Just bring a laptop. Follow our battle-tested curriculum, push your limits, Practice and go from zero to industry-ready.",
      icon: <MdSpeed className="text-2xl" />,
      iconBg: "bg-success",
      iconColor: "text-success",
    },
    {
      id: 3,
      title: "Get Hands-On Experience: Work With Real Dev Tools & Setups",
      text: "Live demos + Guided practice on real tools and configs = True mastery.",
      icon: <GrConfigure className="text-2xl" />,
      iconBg: "bg-warning",
      iconColor: "text-warning",
    },
  ];

  return (
    <section className="flex flex-col gap-8 max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-[var(--text-app)]">
        <span className="text-primary">Beginner</span> Friendly Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kickStarts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 border border-neutral rounded-2xl p-6 bg-[var(--bg-app)]"
          >
            <div
              className={`p-3 ${item.iconBg} ${item.iconColor} w-fit rounded-lg`}
            >
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-app)]">
              {item.title}
            </h3>
            <p className="text-neutral">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KickStart;
