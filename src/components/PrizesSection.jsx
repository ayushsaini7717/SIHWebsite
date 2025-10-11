import { Trophy, Award, Medal } from "lucide-react";

const PrizesSection = () => {
  return (
    <section id="prizes" className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
        Prizes & Recognition
      </h2>

      <p className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto">
        Recognizing innovation and creativity at every stage - from the
        <span className="text-green-400 font-semibold"> College Level </span>to
        the <span className="text-blue-400 font-semibold"> State Level </span>.
        Top-performing teams will earn certificates, cash prizes, and the
        opportunity to represent BTKIT at the Uttarakhand State Finals.
      </p>

      {/* Prize Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* College Level */}
        <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-green-400/20 transition-shadow">
          <div className="flex flex-col items-center mb-6">
            <Award className="w-12 h-12 text-green-400 mb-3" />
            <h3 className="text-2xl font-bold text-green-400">
              College Level
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Organized at BTKIT Dwarahat
            </p>
          </div>

          <ul className="space-y-4 text-gray-300 text-left max-w-sm mx-auto">
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>🥇 1st Prize</span>
              <span className="font-semibold text-green-400">₹15,000</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>🥈 2nd Prize</span>
              <span className="font-semibold text-gray-300">₹10,000</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>🥉 3rd Prize</span>
              <span className="font-semibold text-orange-400">₹5,000</span>
            </li>
          </ul>

          <p className="text-sm text-gray-400 mt-6">
            Certificates for all participating teams
          </p>
        </div>

        {/* State Level */}
        <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-blue-400/20 transition-shadow">
          <div className="flex flex-col items-center mb-6">
            <Trophy className="w-12 h-12 text-blue-400 mb-3" />
            <h3 className="text-2xl font-bold text-blue-400">State Level</h3>
            <p className="text-sm text-gray-400 mt-1">
              Uttarakhand Tech Hackathon Finals
            </p>
          </div>

          <div className="bg-slate-900/60 border border-white/10 rounded-xl py-6 px-4 shadow-inner">
            <div className="mb-4">
              <Medal className="w-10 h-10 text-yellow-400 mx-auto" />
              <h4 className="font-bold text-xl text-yellow-400">1st Prize</h4>
              <p className="text-lg text-white font-semibold">₹1,00,000</p>
            </div>

            <p className="text-sm text-gray-300 mt-3">
              2nd Prize — ₹50,000 <br />
              3rd Prize — ₹25,000
            </p>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            Plus certificates and opportunities for patent filing and incubation
          </p>
        </div>
      </div>

      {/* Recognition Note */}
      <div className="mt-12 bg-slate-900/60 border border-green-500/30 rounded-2xl py-6 px-4 shadow-inner max-w-3xl mx-auto">
        <p className="text-gray-300 text-sm leading-relaxed">
          <span className="text-green-400 font-semibold">Top 3 teams</span> from
          BTKIT will represent the institute at the{" "}
          <span className="text-blue-400 font-semibold">
            Uttarakhand State Hackathon 2025
          </span>
          . <br />
          Additional teams may receive{" "}
          <span className="text-orange-400 font-semibold">mentorship</span> and{" "}
          <span className="text-orange-400 font-semibold">innovation support</span>.
        </p>
      </div>
    </section>
  );
};

export default PrizesSection;
