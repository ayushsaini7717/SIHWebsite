import { useRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const TimelineSection = () => {
  const events = [
    {
      date: "Till 24th October 2025",
      title: "Registration Phase",
      detail: "Team registrations open for BTKIT students (4-6 members (atleast one female)).",
    },
    {
      date: "30th Octoer 2025 (Updated)",
      title: "College Level Hackathon",
      detail: "Teams will present their solutions during the internal hackathon held at BTKIT, Dwarahat. Top 3 teams will be selected.",
    },
    {
      date: "2nd-9th November 2025",
      title: "State Level Hackathon",
      detail: "Selected top 3 teams from BTKIT will represent the institute at the State-Level Uttarakhand Tech Hackathon 2025.",
    },
  ];

  return (
    <section id="timeline" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Event Timeline
      </h2>

      <div className="space-y-6">
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
              className="p-5 bg-slate-800 border border-white/10 rounded-xl shadow-md hover:bg-slate-700 transition-all"
            >
              <h3 className="font-bold text-green-400 text-lg">{event.title}</h3>
              <p className="text-gray-200 text-sm">{event.date}</p>
              <p className="text-gray-400 mt-2 text-sm">{event.detail}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-300 text-sm sm:text-base">
          🏆 <span className="text-green-400 font-semibold">Top 3 teams</span> from BTKIT will move forward to represent the institute at the{" "}
          <span className="text-blue-400">State-Level Uttarakhand Tech Hackathon 2025.</span>
        </p>
      </div>
    </section>
  );
};

export default TimelineSection;
