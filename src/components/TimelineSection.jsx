import { useRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Calendar, Clock, Trophy, CheckCircle } from "lucide-react";

const TimelineSection = () => {
  const events = [
    {
      date: "October 11 – 18, 2025",
      title: "Registration & Idea Submission",
      description:
        "Teams submit innovative ideas aligned with Uttarakhand’s development themes through the official Google Form.",
      icon: Calendar,
      color: "text-green-400",
    },
    {
      date: "October 31 – November 1, 2025",
      title: "College-Level Semi Finals",
      description:
        "Top 30 shortlisted teams will present their ideas. 10 best teams will move to the final stage.",
      icon: Clock,
      color: "text-blue-400",
    },
    {
      date: "November 4, 2025",
      title: "Final Round & Award Ceremony",
      description:
        "The final 10 teams will present prototypes. Top 3 teams will be selected to represent BTKIT at the State Level.",
      icon: Trophy,
      color: "text-yellow-400",
    },
    {
      date: "Announced Soon",
      title: "Uttarakhand State-Level Hackathon",
      description:
        "Top teams from each institution will compete at the State Level for prizes worth ₹1.75 Lakh.",
      icon: CheckCircle,
      color: "text-purple-400",
    },
  ];

  return (
    <section id="timeline" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
        Event Timeline
      </h2>

      <div className="space-y-10">
        {events.map((event, idx) => {
          const ref = useRef(null);
          const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });

          return (
            <motion.div
              key={idx}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 border-l-4 border-green-500/40 hover:border-green-400 transition-all"
            >
              {/* Icon */}
              <div className="absolute -left-6 top-0 bg-slate-800 border border-white/20 rounded-full p-2">
                <event.icon className={`w-6 h-6 ${event.color}`} />
              </div>

              {/* Timeline Content */}
              <h3 className="text-xl font-semibold text-white mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2 italic">{event.date}</p>
              <p className="text-gray-300">{event.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom highlight box */}
      <div className="mt-16 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg">
        <h3 className="text-2xl font-bold text-green-400 mb-2">
          Selection Process Overview
        </h3>
        <div className="grid sm:grid-cols-3 gap-4 text-gray-300">
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-3xl font-bold text-blue-400">30</p>
            <p className="text-sm">Teams Shortlisted</p>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-3xl font-bold text-yellow-400">10</p>
            <p className="text-sm">Semi-Finalists</p>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-3xl font-bold text-green-400">3</p>
            <p className="text-sm">State-Level Representatives</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
