import useCountdown from "../hooks/useCountdown";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const targetDate = "2025-09-15T23:59:59";
  const { days, hours, minutes, seconds } = useCountdown(targetDate);
  const navigator = useNavigate();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center 
             bg-gradient-to-r from-orange-500 via-white to-green-600 px-4 pt-20 pb-12"
    >
      {/* Logo */}
      <img
        src="/btkitLOGO.png"
        alt="logo"
        className="w-32 md:w-48 lg:w-56 h-auto mb-6"
      />

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-slate-900 drop-shadow-lg leading-tight">
        Smart India Hackathon 2025
      </h1>

      {/* Subheading */}
      <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-gray-800 mb-6 max-w-2xl">
        Bipin Tripathi Kumaon Institute of Technology, Dwarahat (Almora) <br />
        <span className="text-orange-600">Internal Hackathon</span>
      </h2>

      {/* Tagline */}
      <p className="text-lg sm:text-xl mb-8 text-gray-900 italic">
        "Build Tomorrow&apos;s India Today"
      </p>

      {/* Countdown Timer */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-8 w-full max-w-2xl">
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            {days}
          </span>
          <span className="text-xs sm:text-sm md:text-base text-gray-800">
            Days
          </span>
        </div>
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            {hours}
          </span>
          <span className="text-xs sm:text-sm md:text-base text-gray-800">
            Hours
          </span>
        </div>
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            {minutes}
          </span>
          <span className="text-xs sm:text-sm md:text-base text-gray-800">
            Minutes
          </span>
        </div>
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            {seconds}
          </span>
          <span className="text-xs sm:text-sm md:text-base text-gray-800">
            Seconds
          </span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full max-w-md">
        <a
          href="#register"
          className="px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl text-white font-semibold shadow-lg transition-colors text-center w-full sm:w-auto"
        >
          Register Now
        </a>
        <button
          onClick={() => {
            navigator("/info");
          }}
          className="px-6 py-3 rounded-xl bg-green-500 cursor-pointer shadow-lg transition-colors hover:bg-green-600 text-white font-semibold w-full sm:w-auto"
        >
          Notices & Informations
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
