import useCountdown from "../hooks/useCountdown";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const targetDate = "2025-11-04T10:00:00"; // Countdown till Nov 4, 2025, 10:00 AM
  const { days, hours, minutes, seconds } = useCountdown(targetDate);
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-green-600 via-blue-900 to-slate-800 px-4 relative overflow-hidden"
    >
      {/* Light background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,128,0.2),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(0,128,255,0.2),transparent_70%)]"></div>

      {/* BTKIT Logo */}
      <img
        src="/btkitLOGO.png"
        alt="BTKIT Logo"
        className="w-full max-w-[180px] h-auto mb-4 mt-12 drop-shadow-lg"
      />

      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 drop-shadow-md">
        Uttarakhand Tech Hackathon 2025
      </h1>

      <h2 className="text-lg md:text-2xl font-semibold text-gray-200 mb-6">
        Bipin Tripathi Kumaon Institute of Technology, Dwarahat (Almora)
        <br />
        <span className="text-green-400">Design Skills Competition</span>
      </h2>

      <p className="text-xl mb-8 text-gray-300 italic">
        "Vikshit Uttarakhand - Empowering through Innovation"
      </p>

      {/* Countdown Timer */}
      <div className="grid grid-cols-4 gap-4 text-center mb-8">
        {[
          { label: "Days", value: days },
          { label: "Hours", value: hours },
          { label: "Minutes", value: minutes },
          { label: "Seconds", value: seconds },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-white/10"
          >
            <span className="text-3xl md:text-4xl font-bold text-green-400">
              {item.value}
            </span>
            <span className="text-sm md:text-base text-gray-300">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
        <a
          href="https://forms.gle/cPSbdNEQMMkcoNX3A"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-xl text-white font-semibold shadow-lg transition-transform transform hover:scale-105 text-center"
        >
          Register Your Team
        </a>

        <button
          onClick={() => {
            navigate("/info");
          }}
          className="px-8 py-3 border border-white/30 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          Learn More
        </button>
      </div>

      <p className="text-sm text-gray-400 mt-6">
        Registration Open • Deadline: <span className="text-green-400">Oct 18, 2025</span>
      </p>
    </section>
  );
};

export default HeroSection;
