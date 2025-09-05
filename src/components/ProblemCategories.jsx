const categories = [
    "Smart Education",
    "Healthcare",
    "Agriculture",
    "Smart Transportation",
    "Fintech",
    "Clean Energy",
  ];
  
  const ProblemCategories = () => {
    return (
      <section id="categories" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Problem Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:scale-105 transform transition duration-300"
            >
              <h3 className="text-xl font-semibold">{cat}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ProblemCategories;
  