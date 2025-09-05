import {
  Rocket,
  Cpu,
  Dumbbell,
  Landmark,
  HeartPulse,
  Sprout,
  Car,
  Truck,
  Bot,
  Leaf,
  Plane,
  Sun,
  ShieldCheck,
  BookOpen,
  AlertTriangle,
  Puzzle,
  Sparkles,
} from "lucide-react";

const categories = [
  { name: "Space Technology", icon: Rocket },
  { name: "Smart Automation", icon: Cpu },
  { name: "Fitness & Sports", icon: Dumbbell },
  { name: "Heritage & Culture", icon: Landmark },
  { name: "MedTech / BioTech / HealthTech", icon: HeartPulse },
  { name: "Agriculture, FoodTech & Rural Development", icon: Sprout },
  { name: "Smart Vehicles", icon: Car },
  { name: "Transportation & Logistics", icon: Truck },
  { name: "Robotics and Drones", icon: Bot },
  { name: "Clean & Green Technology", icon: Leaf },
  { name: "Tourism", icon: Plane },
  { name: "Renewable / Sustainable Energy", icon: Sun },
  { name: "Blockchain & Cybersecurity", icon: ShieldCheck },
  { name: "Smart Education", icon: BookOpen },
  { name: "Disaster Management", icon: AlertTriangle },
  { name: "Toys and Games", icon: Puzzle },
  { name: "Miscellaneous", icon: Sparkles },
];

const ProblemCategories = () => {
  return (
    <section id="categories" className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10 text-green-400">
        Problem Categories (SIH 2025 Themes)
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {categories.map(({ name, icon: Icon }, idx) => (
          <div
            key={idx}
            className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:scale-105 transform transition duration-300 flex flex-col items-center"
          >
            <Icon className="w-10 h-10 mb-4 text-orange-400" />
            <h3 className="text-lg font-semibold text-orange-300">{name}</h3>
          </div>
        ))}
      </div>
      <a
        href="https://www.sih.gov.in/sih2025PS"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl text-white font-semibold shadow-lg"
      >
        View Problem Statements
      </a>
    </section>
  );
};

export default ProblemCategories;
