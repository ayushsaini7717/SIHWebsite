import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
         <img
  src="/sih logo.jpg"
  alt="logo"
  className="w-8 md:w-12 lg:w-14 h-auto rounded-full"
/>

          <h1 className="text-lg md:text-xl font-bold text-white">SIH 2025</h1>
        </div>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="text-gray-200 hover:text-orange-400">Home</a>
          <a href="#about" className="text-gray-200 hover:text-orange-400">About SIH</a>
          <a href="#timeline" className="text-gray-200 hover:text-orange-400">Timeline</a>
          <a href="#register" className="text-gray-200 hover:text-orange-400">Register</a>
          <button onClick={() => navigate('/info')} className="text-gray-200 hover:text-orange-400">
            Notices & Informations
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-gray-700 px-6 py-4 space-y-4">
          <a href="#home" className="block text-gray-200 hover:text-orange-400">Home</a>
          <a href="#about" className="block text-gray-200 hover:text-orange-400">About SIH</a>
          <a href="#timeline" className="block text-gray-200 hover:text-orange-400">Timeline</a>
          <a href="#register" className="block text-gray-200 hover:text-orange-400">Register</a>
          <button
            onClick={() => {
              navigate('/info');
              setIsOpen(false);
            }}
            className="block w-full text-left text-gray-200 hover:text-orange-400"
          >
            Notices & Informations
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
