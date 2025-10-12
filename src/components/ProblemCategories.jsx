import { Leaf, Zap, Heart, BookOpen, Landmark, Mountain, Cpu, Sun, Globe } from "lucide-react";

const domains = [
  {
    title: "Smart Tourism & Eco-Conservation",
    description:
      "Smart trekking apps, eco-tourism platforms, waste management & real-time weather alerts for hill areas.",
    icon: Mountain,
    color: "bg-blue-600",
  },
  {
    title: "Sustainable Agriculture & Rural Development",
    description:
      "Smart irrigation, AI-based crop health monitoring, e-marketplace, and rural livelihood support.",
    icon: Leaf,
    color: "bg-green-600",
  },
  {
    title: "Disaster Management & Environmental Safety",
    description:
      "Drone-based fire detection, landslide warning systems, and real-time flood monitoring.",
    icon: Zap,
    color: "bg-red-600",
  },
  {
    title: "Education & Youth Empowerment",
    description:
      "AR/VR learning for remote schools, AI tutors, career guidance chatbots, and skill development platforms.",
    icon: BookOpen,
    color: "bg-orange-600",
  },
  {
    title: "Healthcare & Wellness in Hilly Areas",
    description:
      "Telemedicine, health kiosks, maternal health apps, and ambulance optimization for hill terrain.",
    icon: Heart,
    color: "bg-pink-600",
  },
  {
    title: "Smart Governance & Digital Uttarakhand",
    description:
      "e-Panchayat systems, fund utilization trackers, and grievance redressal apps for hill regions.",
    icon: Landmark,
    color: "bg-teal-600",
  },
  {
    title: "Renewable Energy & Green Technology",
    description:
      "Solar IoT devices, microgrid management, green energy tracking, and small-scale hydro solutions.",
    icon: Sun,
    color: "bg-yellow-600",
  },
  {
    title: "Cultural Heritage & Local Entrepreneurship",
    description:
      "Digital museums, AI-based language preservation, and online handicraft & organic product platforms.",
    icon: Globe,
    color: "bg-purple-600",
  },
  {
    title: "Open Innovation in Technical Education",
    description:
      "Any innovative solution that empowers Uttarakhand through technology and education.",
    icon: Cpu,
    color: "bg-gray-700",
  },
];

const ProblemCategories = () => {
  return (
    <section id="categories" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Problem Domains
      </h2>
      <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
        Explore the 9 key domains for the <span className="text-green-400">Uttarakhand Tech-Hackathon 2025</span>, 
        focusing on sustainable innovation, rural empowerment, and regional development.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain, idx) => (
          <div
            key={idx}
            className={`p-6 ${domain.color} text-white rounded-xl shadow-lg hover:scale-105 transform transition-all`}
          >
            <div className="flex items-center gap-3 mb-3">
              <domain.icon className="w-7 h-7 text-white" />
              <h3 className="text-lg font-semibold">{domain.title}</h3>
            </div>
            <p className="text-sm text-gray-100">{domain.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemCategories;
