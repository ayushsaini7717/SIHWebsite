const PrizesSection = () => {
  return (
    <section id="prizes" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
        Prizes & Recognition
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* College Level Prizes */}
        <div className="p-6 bg-slate-800 rounded-xl shadow-lg border border-white/10">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            College Level Hackathon
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            The internal hackathon will be held at BTKIT Dwarahat. The top 3 teams will be selected to represent the institute at the State-Level Hackathon.
          </p>

          <div className="space-y-3 text-left text-gray-200">
            <div className="flex justify-between bg-slate-700 rounded-lg px-4 py-2">
              <span>🥇 1st Prize</span>
              <span className="font-semibold text-yellow-400">₹15,000</span>
            </div>
            <div className="flex justify-between bg-slate-700 rounded-lg px-4 py-2">
              <span>🥈 2nd Prize</span>
              <span className="font-semibold text-gray-300">₹10,000</span>
            </div>
            <div className="flex justify-between bg-slate-700 rounded-lg px-4 py-2">
              <span>🥉 3rd Prize</span>
              <span className="font-semibold text-orange-400">₹5,000</span>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            All participants will receive certificates of participation.
          </p>
        </div>

        {/* State Level Prizes */}
        <div className="p-6 bg-slate-800 rounded-xl shadow-lg border border-white/10">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">
            State Level Hackathon
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            The top 3 winning teams from BTKIT will represent the institute at the Uttarakhand State-Level Tech Hackathon 2025.
          </p>

          <div className="space-y-3 text-left text-gray-200">
            <div className="flex justify-between bg-slate-700 rounded-lg px-4 py-2">
              <span>🏆 1st Prize</span>
              <span className="font-semibold text-yellow-400">₹1,00,000</span>
            </div>
            <div className="flex justify-between bg-slate-700 rounded-lg px-4 py-2">
              <span>🥈 2nd Prize</span>
              <span className="font-semibold text-gray-300">₹50,000</span>
            </div>
            <div className="flex justify-between bg-slate-700 rounded-lg px-4 py-2">
              <span>🥉 3rd Prize</span>
              <span className="font-semibold text-orange-400">₹25,000</span>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            Winners will also get certificates and recognition at the state level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
