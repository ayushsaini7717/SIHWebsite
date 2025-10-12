import {
  Mountain,
  Leaf,
  Zap,
  Brain,
  Heart,
  Target,
  Sun,
  Award,
  Code,
} from "lucide-react";

const domains = [
  {
    title: "Smart Tourism & Eco-Conservation",
    icon: Mountain,
    desc: [
      "Smart Trekking Assistance App for Tourists",
      "Real-Time Disaster & Weather Alert System",
      "Eco-Tourism Promotion Platform using AI",
      "Waste Management Solutions for Tourist Spots",
    ],
  },
  {
    title: "Sustainable Agriculture & Rural Development",
    icon: Leaf,
    desc: [
      "Smart Irrigation System for Hill Farming",
      "AI-based Crop and Soil Health Monitoring",
      "Direct Farmer-to-Market (F2M) Portal",
      "Livelihood Support App for Rural Women & SHGs",
    ],
  },
  {
    title: "Disaster Management & Environmental Safety",
    icon: Zap,
    desc: [
      "Drone-based Forest Fire Detection",
      "IoT-based Landslide Early Warning System",
      "Real-Time River and Flood Monitoring",
      "Blockchain for Relief Distribution Transparency",
    ],
  },
  {
    title: "Education & Youth Empowerment",
    icon: Brain,
    desc: [
      "AR/VR Based Learning for Remote Schools",
      "Career Guidance Chatbot for Rural Students",
      "Online Skill Development Portal for Youth",
      "AI Tutor for Local Languages (Garhwali/Kumaoni)",
    ],
  },
  {
    title: "Healthcare & Wellness in Hilly Areas",
    icon: Heart,
    desc: [
      "Telemedicine Platform for Remote Villages",
      "Smart Health Kiosk for PHCs",
      "Maternal & Child Health Tracking App",
      "AI-based Ambulance Route Optimization",
    ],
  },
  {
    title: "Smart Governance & Digital Uttarakhand",
    icon: Target,
    desc: [
      "Unified Citizen Grievance Redressal System",
      "e-Panchayat Platform for Hill Villages",
      "Transparent Fund Utilization Tracker",
      "Digital Document Locker for Citizens",
    ],
  },
  {
    title: "Renewable Energy & Green Technology",
    icon: Sun,
    desc: [
      "Solar-Powered IoT Devices for Hill Villages",
      "Smart Microgrid Management System",
      "Green Energy Tracking App",
      "Low-Cost Wind or Hydro Power Solutions",
    ],
  },
  {
    title: "Cultural Heritage & Local Entrepreneurship",
    icon: Award,
    desc: [
      "Digital Museum of Uttarakhand Culture & Folk Art",
      "E-commerce Platform for Handicrafts & Organic Products",
      "AI-based Language Preservation Tool",
      "Tourism Route Planner with Cultural Significance",
    ],
  },
  {
    title: "Open Innovation",
    icon: Code,
    desc: ["Any other theme related to Technical Education in Uttarakhand"],
  },
];

const ProblemDomains = () => {
  return (
    <section id="domains" className="py-20 px-6 max-w-6xl mx-auto text-gray-200">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Problem Domains
      </h2>
      <p className="text-center text-gray-400 mb-8">
        Explore diverse domains focusing on the development of Uttarakhand through technology.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-white/10 rounded-xl p-6 hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <domain.icon className="w-6 h-6 text-orange-400" />
              <h3 className="font-bold text-lg text-white">{domain.title}</h3>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              {domain.desc.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemDomains;
