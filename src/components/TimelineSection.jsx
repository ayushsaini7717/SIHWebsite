import { useRef } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const TimelineEvent = ({ event, delay }) => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
    >
      <h3 className="font-semibold text-orange-400">{event.date}</h3>
      <p className="text-gray-200">{event.title}</p>
    </motion.div>
  );
};

const TimelineSection = () => {
  const events = [
    { date: "25 Aug 2025", title: "Problem Statement Release" },
    { date: "10 Sep 2025", title: "Last Date for Team Registration" },
    { date: "16 Sep 2025", title: "Internal Hackathon" },
    { date: "18 Sep 2025", title: "Result Announcement of Internal Hackathon" },
    { date: "Dec 2025", title: "Grand Finale (National SIH)" },
  ];

  return (
    <section id="timeline" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-400">
        Timeline
      </h2>
      <div className="space-y-6">
        {events.map((event, idx) => (
          <TimelineEvent key={idx} event={event} delay={idx * 0.2} />
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
