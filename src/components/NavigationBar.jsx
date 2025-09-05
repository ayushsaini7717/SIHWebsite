const NavigationBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">SIH 2025</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="text-gray-200 hover:text-orange-400">Home</a>
          <a href="#about" className="text-gray-200 hover:text-orange-400">About SIH</a>
          <a href="#timeline" className="text-gray-200 hover:text-orange-400">Timeline</a>
          {/* <a href="#prizes" className="text-gray-200 hover:text-orange-400">Prizes</a> */}
          <a href="#register" className="text-gray-200 hover:text-orange-400">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
