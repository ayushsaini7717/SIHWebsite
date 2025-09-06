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
    { date: "15 Sep 2025", title: "Last Date for Team Registration" },
    { date: "16 Sep 2025", title: "Internal Hackathon" },
    { date: "18 Sep 2025", title: "Result Announcement of Internal Hackathon (Tentative)" },
    { date: "Dec 2025", title: "Grand Finale (National SIH)" },
  ];

  const imgRef = useRef(null);
  const isImgVisible = useIntersectionObserver(imgRef, { threshold: 0.2 });

  return (
    <section
      id="timeline"
      className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-10 text-green-400">
        Timeline
      </h2>

      <div className="space-y-6 sm:space-y-8">
        {events.map((event, idx) => (
          <TimelineEvent key={idx} event={event} delay={idx * 0.2} />
        ))}

        {/* Animate Image same as events */}
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isImgVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: events.length * 0.2 }}
          className="flex justify-center items-center"
        >
          <img
            src="/flow.png"
            alt="logo"
            className="w-full max-w-xs sm:max-w-md lg:max-w-3xl h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
