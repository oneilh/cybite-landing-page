import { IoCode } from "react-icons/io5";
import { LuServer } from "react-icons/lu";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsPalette } from "react-icons/bs";
export const courses = [
  {
    id: 1,
    icon: <IoCode className="text-primary" />,
    name: "FrontEnd Dev",
    info: "70 lessons - 4 months",
    // price: "₦175,000",
    desc: "Learn to build beautiful, interactive user interfaces with modern web technologies.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "GitHub",
      "Bootstrap",
      "TailwindCSS",
      "React",
    ],
  },
  {
    id: 2,
    icon: <LuServer className="text-primary" />,
    name: "BackEnd Dev",
    // price: "₦175,000",
    info: "65 lessons - 3 months",
    desc: "Master server-side development and database management for robust web applications.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "APIs",
      "Authentication",
    ],
  },
  {
    id: 3,
    icon: <AiOutlineLineChart className="text-primary" />,
    name: "Data Analysis",
    // price: "₦175,000",
    info: "60 lessons - 4 months",
    desc: "Unlock insights from data using powerful analysis tools and visualization techniques.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "Excel"],
  },
  {
    id: 4,
    icon: <BsPalette className="text-primary" />,
    name: "Visual & UX Design",
    // price: "₦250,000",
    info: "55 lessons - 3 months",
    desc: "Create stunning visual designs and intuitive user experiences for digital products.",
    technologies: [
      "Adobe Photoshop",
      "Figma",
      "Corel Draw",
      "UI Principles",
      "Wireframing",
    ],
  },
];
