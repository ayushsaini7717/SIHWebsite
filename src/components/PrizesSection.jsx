const PrizesSection = () => {
  return (
    <section id="prizes" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Prizes & Recognition</h2>

      <p className="text-lg mb-6 text-gray-300 leading-relaxed">
        The hackathon is not just about winning, but about representing{" "}
        <span className="font-semibold text-orange-400">BTKIT Dwarahat</span> 
        at the national level. The{" "}
        <span className="text-green-400 font-semibold">top 25 teams</span> will
        be shortlisted to represent our institute at{" "}
        <span className="font-semibold text-orange-500">Smart India Hackathon 2025</span>.
        Additionally,{" "}
        <span className="font-semibold text-green-400">5 waitlisted teams</span>{" "}
        will also be selected as backups.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="p-6 bg-orange-500 rounded-xl shadow-lg">
          <h3 className="font-bold text-xl mb-2">Top 25 Teams</h3>
          <p className="text-gray-100">Will represent BTKIT at SIH 2025</p>
        </div>
        <div className="p-6 bg-green-500 rounded-xl shadow-lg">
          <h3 className="font-bold text-xl mb-2">5 Waitlisted Teams</h3>
          <p className="text-gray-100">Kept as backups for representation</p>
        </div>
        <div className="p-6 bg-blue-500 rounded-xl shadow-lg">
          <h3 className="font-bold text-xl mb-2">Certificates</h3>
          <p className="text-gray-100">All participants will receive certificates</p>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
