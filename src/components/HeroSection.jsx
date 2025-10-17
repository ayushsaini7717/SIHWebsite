import useCountdown from "../hooks/useCountdown";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const targetDate = "2025-11-04T09:59:59"; // Countdown till 4th Nov 2025, 9:59:59 AM
  const { days, hours, minutes, seconds } = useCountdown(targetDate);
  const navigator = useNavigate();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-900 via-slate-900 to-green-800 px-4 pt-24 sm:pt-28"
    >
      {/* Logo */}
      <img
        src="/btkitLOGO.png"
        alt="BTKIT Logo"
        className="w-full max-w-[180px] h-auto mb-4"
      />

      {/* Headings */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 text-white drop-shadow-lg leading-snug">
        Uttarakhand Tech-Hackathon 2025
      </h1>

      <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-gray-300 mb-3 leading-relaxed">
        Department of Computer Science & Engineering <br />
        Bipin Tripathi Kumaon Institute of Technology, Dwarahat (Almora)
      </h2>

      <p className="text-sm sm:text-base md:text-xl mb-6 text-green-400 font-semibold italic">
        “Technical Education Over the Years”
      </p>

      {/* Countdown Timer */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-8">
        {[
          { label: "Days", value: days },
          { label: "Hours", value: hours },
          { label: "Minutes", value: minutes },
          { label: "Seconds", value: seconds },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl shadow-md"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              {item.value}
            </span>
            <span className="text-xs sm:text-sm text-gray-300">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          onClick={() =>
            window.open("https://forms.gle/gZa89ebiPEFsMr4H6", "_blank")
          }
          className="px-6 sm:px-8 py-3 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold shadow-lg transition-all"
        >
          Register Now
        </button>

        <button
          onClick={() => navigator("/info")}
          className="px-6 sm:px-8 py-3 border border-green-400 rounded-xl text-white font-semibold hover:bg-white/10 transition-all"
        >
          Notices & Information
        </button>

      </div>

      {/* Footer Text */}
      <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-6">
        Organized on{" "}
        <span className="text-green-400">4th November 2025</span> | Theme:{" "}
        <span className="text-blue-400">Vikshit Uttarakhand</span>
      </p>
    </section>
  );
};

export default HeroSection;
