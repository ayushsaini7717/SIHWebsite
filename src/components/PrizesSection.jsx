const PrizesSection = () => {
    return (
      <section id="prizes" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Prizes & Recognition</h2>
        <p className="text-lg mb-6 text-gray-300">
          Winners will get certificates, cash prizes, and a chance to represent
          BTKIT at the national SIH 2025.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-r from-orange-500 to-green-600 rounded-xl shadow-xl">
            <h3 className="font-bold text-xl">1st Prize</h3>
            <p>₹10,000 + Certificate</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-orange-400 to-green-500 rounded-xl shadow-xl">
            <h3 className="font-bold text-xl">2nd Prize</h3>
            <p>₹7,000 + Certificate</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-orange-300 to-green-400 rounded-xl shadow-xl">
            <h3 className="font-bold text-xl">3rd Prize</h3>
            <p>₹5,000 + Certificate</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default PrizesSection;
  