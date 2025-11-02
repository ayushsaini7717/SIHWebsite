const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-5xl mx-auto text-center text-gray-200"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">
        About Uttarakhand Tech Hackathon 2025
      </h2>

      <p className="text-lg leading-relaxed mb-4">
        As per the Technical Education Department, Government of Uttarakhand and VMSB Uttarakhand Technical University, a{" "}
        <span className="text-orange-400 font-semibold">
          Silver Jubilee Celebration
        </span>{" "}
        is being organized on the occasion of the{" "}
        <span className="text-blue-400 font-semibold">
          25th year of state formation
        </span>{" "}
        under the theme{" "}
        <span className="italic text-blue-400">
          “Technical Education Over the Years.”
        </span>
      </p>

      <p className="text-base mb-4">
        As part of this celebration, the{" "}
        <span className="text-orange-400 font-semibold">
          Department of Computer Science & Engineering, BTKIT Dwarahat
        </span>{" "}
        is hosting an{" "}
        <span className="text-white font-semibold">
          “AI and Coding Based Hackathon”
        </span>{" "}
        at the institute level. The event aims to encourage innovation and
        practical solutions to real-world problems aligned with the development
        of Uttarakhand.
      </p>

      <p className="text-base mb-4">
        The hackathon includes thematic areas such as{" "}
        <span className="text-green-400 font-semibold">
          Smart Education, AI in Agriculture, Forestry, Health, Tourism,
          Cybersecurity, and Indian Languages
        </span>
        . Participants will propose innovative ideas that address the given
        problem statements and promote technological growth in the state.
      </p>

      <div className="bg-slate-800 border border-white/10 rounded-xl p-6 mt-8 text-left">
        <h3 className="text-xl font-bold text-orange-400 mb-3 text-center">
          Key Details
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li>📅 <strong>Date:</strong> Between October 16 and October 30, 2025</li>
          <li>📍 <strong>Venue:</strong> CSE Smart Classroom, BTKIT Dwarahat</li>
          <li>👥 <strong>Team Size:</strong> 4–6 Members (At least one female participant)</li>
          <li>👩‍🏫 <strong>Mentor:</strong> Each team must have a faculty mentor</li>
          <li>🧩 <strong>Domains:</strong> AI & Coding-based Problem Statements</li>
          <li>🏆 <strong>Selection:</strong> Top 3 teams will represent BTKIT in the Final State-Level Hackathon at Dehradun (November 2–9, 2025)</li>
          <li>📝 <strong>Registration:</strong> Through the official link provided on this website</li>
          <li>⚙️ <strong>Evaluation Criteria:</strong> Innovation, Feasibility, Technical Approach, Scalability & Societal Impact</li>
        </ul>
      </div>

      
    </section>
  );
};

export default AboutSection;
