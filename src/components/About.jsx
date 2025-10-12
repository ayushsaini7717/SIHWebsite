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
        On the auspicious occasion of <span className="text-green-400 font-semibold">Uttarakhand Foundation Day</span>,
        the <span className="text-orange-400 font-semibold">Department of Computer Science & Engineering</span>, BTKIT
        Dwarahat is organizing a state-level hackathon titled{" "}
        <span className="font-semibold text-white">
          “Uttarakhand Tech-Hackathon 2025”
        </span>{" "}
        under the theme <span className="italic text-blue-400">“Technical Education Over the Years.”</span>
      </p>

      <p className="text-base mb-4">
        The hackathon aims to provide students with an opportunity to showcase
        innovative solutions addressing real-world challenges faced in the
        Himalayan state of Uttarakhand. It encourages participants to develop
        projects in both <span className="text-green-400 font-semibold">Software</span> and{" "}
        <span className="text-green-400 font-semibold">Hardware</span> domains.
      </p>

      <p className="text-base mb-4">
        The event emphasizes creative problem-solving, sustainable technology
        development, and the application of modern engineering skills to promote
        the vision of <span className="text-blue-400 font-semibold">“Vikshit Uttarakhand – Empowering through Innovation.”</span>
      </p>

      <div className="bg-slate-800 border border-white/10 rounded-xl p-6 mt-8 text-left">
        <h3 className="text-xl font-bold text-orange-400 mb-3 text-center">
          Key Details
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li>📅 <strong>Date:</strong> November 4, 2025</li>
          <li>📍 <strong>Venue:</strong> CSE Smart Classroom, BTKIT Dwarahat</li>
          <li>👥 <strong>Team Size:</strong> 4 Members (All from BTKIT)</li>
          <li>🧩 <strong>Domains:</strong> Software & Hardware Problem Statements</li>
          <li>🏆 <strong>Selection:</strong> Top 3 teams will represent BTKIT at the State-Level Round</li>
          <li>📝 <strong>Registration:</strong> Through the official link provided on this website</li>
          <li>⚙️ <strong>Evaluation:</strong> Based on Innovation, Feasibility, Technical Approach & Societal Impact</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
