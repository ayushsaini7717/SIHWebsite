import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-slate-900/70 border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavClick("home")}
        >
          <img
            src="/Seal_of_Uttarakhand.svg"
            alt="Uttarakhand Logo"
            className="w-10 h-10 object-contain"
          />
          <div>
            <h1 className="text-white font-bold text-lg leading-tight">
              Uttarakhand Tech Hackathon 2025
            </h1>
            <p className="text-xs text-gray-400 -mt-1">BTKIT Dwarahat</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "domains", label: "Domains" },
            { id: "timeline", label: "Timeline" },
            { id: "prizes", label: "Prizes" },
            { id: "faq", label: "FAQ" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-gray-200 hover:text-green-400 transition-colors"
            >
              {item.label}
            </button>
          ))}

          {/* Register Button */}
          <a
            href="https://forms.gle/cPSbdNEQMMkcoNX3A"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white font-semibold hover:scale-105 transition-transform"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/95 border-t border-white/10 px-6 py-4 space-y-4">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "domains", label: "Domains" },
            { id: "timeline", label: "Timeline" },
            { id: "prizes", label: "Prizes" },
            { id: "faq", label: "FAQ" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left text-gray-200 hover:text-green-400 transition-colors"
            >
              {item.label}
            </button>
          ))}

          <a
            href="https://forms.gle/cPSbdNEQMMkcoNX3A"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-white font-semibold hover:scale-105 transition-transform"
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
