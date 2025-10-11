import { Lightbulb, Users, Rocket, Mountain, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-6xl mx-auto text-center text-white"
    >
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
        About the Hackathon
      </h2>

      {/* Introduction */}
      <p className="text-lg text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
        The <span className="text-green-400 font-semibold">Uttarakhand Tech Hackathon 2025 </span> 
        is a flagship event organized under the Department of Technical Education, Government of Uttarakhand, 
        in collaboration with AICTE. It aims to nurture innovation and technical creativity among students, 
        providing a platform to build impactful, real-world solutions that contribute to a{" "}
        <span className="text-blue-400 font-semibold">Viksit Uttarakhand</span>.
      </p>

      {/* Two-column structure */}
      <div className="grid md:grid-cols-2 gap-8 text-left">
        {/* College Level */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-green-400" />
            <h3 className="text-2xl font-bold text-green-400">
              BTKIT College Level Round
            </h3>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The <span className="font-semibold text-white">CSE Department, BTKIT Dwarahat</span>, 
            proudly hosts the college-level round of the Uttarakhand Tech Hackathon as part of the 
            <span className="text-blue-400"> Uttarakhand Foundation Day (November 4, 2025)</span> celebration.
            Students will participate in an intensive idea development competition focusing on{" "}
            <span className="text-green-400 font-semibold">
              innovative, sustainable, and technology-driven solutions.
            </span>
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>🔹 Team size: 2–4 members (BTKIT students only)</li>
            <li>🔹 Domains: Tourism, Healthcare, Disaster, Agriculture, and more</li>
            <li>🔹 Stage 1: Idea Presentation – 30 shortlisted teams</li>
            <li>🔹 Stage 2: Semi-Finals – Top 10 teams selected</li>
            <li>🔹 Stage 3: Finals – Top 3 teams to represent BTKIT at State Level</li>
          </ul>
          <p className="mt-4 text-sm text-gray-400 italic">
            Winners will receive cash prizes, certificates, and an opportunity to compete at the state level.
          </p>
        </div>

        {/* State Level */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold text-blue-400">
              State-Level Uttarakhand Tech Hackathon
            </h3>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The top-performing teams from each institution will advance to the{" "}
            <span className="font-semibold text-white">State-Level Hackathon</span>, 
            where they will compete for recognition and prizes worth{" "}
            <span className="text-green-400 font-semibold">₹1.75 Lakh</span>. 
            This platform encourages interdisciplinary collaboration and promotes 
            <span className="text-blue-400 font-semibold"> innovation, sustainability, and social impact</span> 
            through technology.
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>🏆 1st Prize – ₹1,00,000</li>
            <li>🥈 2nd Prize – ₹50,000</li>
            <li>🥉 3rd Prize – ₹25,000</li>
          </ul>
          <p className="mt-4 text-sm text-gray-400 italic">
            Top 3 BTKIT teams will represent the institute at this event.
          </p>
        </div>
      </div>

      {/* Judging Criteria */}
      <div className="mt-16 max-w-4xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-center mb-6 text-green-400">
          Judging Criteria
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <Lightbulb className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
            <p className="font-semibold text-gray-200">Innovation</p>
          </div>
          <div>
            <Rocket className="w-8 h-8 mx-auto mb-2 text-blue-400" />
            <p className="font-semibold text-gray-200">Feasibility</p>
          </div>
          <div>
            <Award className="w-8 h-8 mx-auto mb-2 text-purple-400" />
            <p className="font-semibold text-gray-200">Impact</p>
          </div>
          <div>
            <Users className="w-8 h-8 mx-auto mb-2 text-orange-400" />
            <p className="font-semibold text-gray-200">Presentation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
