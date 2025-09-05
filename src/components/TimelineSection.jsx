import { useRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const TimelineSection = () => {
  const events = [
    { date: "Sept 10", title: "Registration Deadline" },
    { date: "Sept 12", title: "Problem Statement Release" },
    { date: "Sept 16", title: "Hackathon Day" },
    { date: "Sept 17", title: "Evaluation & Results" },
    { date: "Sept 20", title: "National SIH Qualification" },
  ];

  return (
    <section id="timeline" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Timeline</h2>
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
              className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
            >
              <h3 className="font-semibold text-orange-400">{event.date}</h3>
              <p>{event.title}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TimelineSection;
