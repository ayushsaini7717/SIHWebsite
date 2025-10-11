import {
  Mountain,
  Leaf,
  Zap,
  Heart,
  Brain,
  Target,
  Landmark,
  Globe,
  Code,
} from "lucide-react";

const categories = [
  {
    name: "Smart Tourism",
    icon: Mountain,
    description:
      "Eco-tourism platforms, trekking safety, crowd management, and sustainable travel apps.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Agriculture & Rural Development",
    icon: Leaf,
    description:
      "Smart irrigation, crop monitoring, digital marketplaces, and rural innovation systems.",
    color: "from-green-500 to-emerald-400",
  },
  {
    name: "Disaster Management",
    icon: Zap,
    description:
      "Early warning systems for landslides, floods, fire detection, and rescue coordination.",
    color: "from-red-500 to-orange-400",
  },
  {
    name: "Healthcare & MedTech",
    icon: Heart,
    description:
      "Telemedicine, local health kiosks, ambulance route optimization, and AI-driven diagnosis.",
    color: "from-pink-500 to-rose-400",
  },
  {
    name: "Education & Skill Development",
    icon: Brain,
    description:
      "AR/VR-based learning, career guidance systems, and digital classroom innovation.",
    color: "from-orange-400 to-yellow-400",
  },
  {
    name: "Governance & e-Governance",
    icon: Target,
    description:
      "Public grievance portals, fund tracking, e-Panchayat systems, and smart record management.",
    color: "from-teal-400 to-cyan-500",
  },
  {
    name: "Heritage & Culture",
    icon: Landmark,
    description:
      "Digital museums, local arts promotion, cultural tourism, and preservation of regional crafts.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Renewable & Clean Energy",
    icon: Globe,
    description:
      "Solar IoT, microgrids, waste-to-energy, and carbon footprint tracking tools.",
    color: "from-yellow-400 to-green-400",
  },
  {
    name: "Open Innovation",
    icon: Code,
    description:
      "Any Uttarakhand-focused idea that fosters innovation and technology-driven development.",
    color: "from-purple-500 to-blue-500",
  },
];

const ProblemCategories = () => {
  return (
    <section id="categories" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
        Problem Domains
      </h2>
      <p className="text-center text-gray-400 mb-10">
        Explore 9 domains aligned with the theme:{" "}
        <span className="text-green-400 font-semibold">
          “Innovative Design for a Sustainable Future”
        </span>
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:border-green-400/50"
          >
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4`}
            >
              <cat.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {cat.name}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {cat.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://docs.google.com/document/d/1tq-xbL0CzQRz0ZKflqKFMv3a8s1jJj8sE2NwbvtiC8Y/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          View Detailed Problem Statements
        </a>
      </div>
    </section>
  );
};

export default ProblemCategories;
