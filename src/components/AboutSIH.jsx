import { motion } from "framer-motion";

const AboutSIH = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-5xl mx-auto text-center text-gray-200"
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-orange-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Smart India Hackathon
      </motion.h2>

      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        The <span className="font-semibold text-white">Smart India Hackathon (SIH)</span> 
        is a nationwide initiative that empowers students to tackle real-life 
        challenges faced by ministries, industries, and society. It is one of 
        India’s biggest open innovation models and a gateway to showcase 
        creativity, problem-solving, and technical skills.
      </motion.p>

      <motion.a
        href="https://www.sih.gov.in/" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold transition duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Learn More on SIH Website
      </motion.a>

      <motion.div
        className="mt-12 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-green-400 mb-4">
          Internal Hackathon at BTKIT
        </h3>
        <p className="text-gray-300 text-md">
          To prepare for SIH 2025, <span className="font-semibold">BTKIT Dwarahat</span> 
          is organizing an <span className="text-orange-400">Internal Hackathon</span> on 
          <span className="font-semibold text-white"> September 16, 2025</span>. 
          This event will help select the best teams to represent our institute 
          at the national level. It’s a chance to showcase your talent, build 
          impactful solutions, and take one step closer to contributing to 
          India’s innovation journey.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSIH;
