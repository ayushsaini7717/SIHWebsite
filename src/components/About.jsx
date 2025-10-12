const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-5xl mx-auto text-center text-gray-200"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        About the Hackathon
      </h2>
      <p className="mb-6 text-gray-300 leading-relaxed">
        On the auspicious occasion of{" "}
        <span className="text-green-400 font-semibold">
          Uttarakhand Foundation Day
        </span>
        , the Department of Computer Science & Engineering,{" "}
        <span className="text-blue-400 font-semibold">
          Bipin Tripathi Kumaon Institute of Technology, Dwarahat
        </span>{" "}
        is organizing a state-level event -{" "}
        <span className="font-semibold text-green-400">
          Uttarakhand Tech-Hackathon 2025
        </span>{" "}
        under the theme{" "}
        <span className="text-orange-400 italic">
          “Technical Education Over the Years.”
        </span>
      </p>

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-left space-y-3 max-w-3xl mx-auto">
        <ul className="list-disc list-inside text-gray-300 text-sm md:text-base space-y-2">
          <li>
            <strong>Event:</strong> Uttarakhand Tech-Hackathon 2025
          </li>
          <li>
            <strong>Date & Venue:</strong> 4th November 2025, CSE Smart Classroom, BTKIT Dwarahat
          </li>
          <li>
            <strong>Team Formation:</strong> Each team must consist of 4 members
            (all from BTKIT; no inter-college teams).
          </li>
          <li>
            <strong>Domains:</strong> Software and Hardware problem statements.
          </li>
          <li>
            <strong>Evaluation Criteria:</strong> Innovation, Feasibility,
            Technical Approach, and Societal Impact.
          </li>
          <li>
            <strong>Selection:</strong> Top 3 teams will be shortlisted to
            represent BTKIT at the State Level Hackathon.
          </li>
          <li>
            <strong>Registration:</strong> Submit your team details through the
            official link below.
          </li>
        </ul>
      </div>

      <a
        href="https://forms.gle/cPSbdNEQMMkcoNX3A"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 mt-8 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold shadow-lg transition-all"
      >
        Go to Registration Form
      </a>
    </section>
  );
};

export default AboutSection;
