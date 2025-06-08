// import { GoStack } from "react-icons/go";
// import { MdSpeed } from "react-icons/md";
// import { GrConfigure } from "react-icons/gr";
// const KickStart = () => {
//   const kickStarts = [
//     {
//       id: 1,
//       title: "Learn Faster. Build Sooner.",
//       text: "Learn the basics in structured way → Level up → Build.",
//       icon: <GoStack className="text-2xl " />,
//     },
//     {
//       id: 2,
//       title: "Accelerate Your Learning",
//       text: "For driven beginners: Just bring a laptop. Follow our battle-tested curriculum push your limits, Practice and go from zero to industry-ready.",
//       icon: <MdSpeed className="text-2xl"/>,
//     },
//     {
//       id: 3,
//       title: "Get Hands-On: Work With Real Dev Tools & Setups",
//       text: "Live demos + guided practice on real tools and configs = true mastery.",
//       icon: <GrConfigure className="text-2xl " />,
//     },
//   ];

//   return (
//     <section className="flex flex-col gap-8">
//       <h2 className="text-app">
//         <span className="text-primary">Beginner</span> Friendly Courses
//       </h2>
//       {kickStarts.map((KickStart) => (
//         <section className="flex flex-col gap-4 border border-neutral rounded-2xl p-6 bg-primary">
//           <div className="flex flex-col gap-2">
//             <div className="p-4 bg-primary w-fit rounded-lg">
//               {KickStart.icon}
//             </div>
//             <h3 className="text-lg font-semibold">{KickStart.title}</h3>
//             <p className=" text-neutral">{KickStart.text}</p>
//           </div>
//         </section>
//       ))}
//     </section>
//   );
// };

// export default KickStart;
import { GoStack } from "react-icons/go";
import { MdSpeed } from "react-icons/md";
import { GrConfigure } from "react-icons/gr";

const KickStart = () => {
  const kickStarts = [
    {
      id: 1,
      title: "Learn Faster. Build Sooner.",
      text: "Learn the basics in structured way → Level up → Build.",
      icon: <GoStack className="text-2xl" />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Accelerate Your Learning",
      text: "For driven beginners: Just bring a laptop. Follow our battle-tested curriculum push your limits, Practice and go from zero to industry-ready.",
      icon: <MdSpeed className="text-2xl" />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 3,
      title: "Get Hands-On: Work With Real Dev Tools & Setups",
      text: "Live demos + guided practice on real tools and configs = true mastery.",
      icon: <GrConfigure className="text-2xl" />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="flex flex-col gap-8 max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        <span className="text-primary">Beginner</span> Friendly Courses
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kickStarts.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col gap-4 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"
          >
            <div className={`p-3 ${item.iconBg} ${item.iconColor} w-fit rounded-lg`}>
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KickStart;