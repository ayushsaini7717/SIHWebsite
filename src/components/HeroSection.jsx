import useCountdown from "../hooks/useCountdown";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const targetDate = "2025-09-16T00:00:00";
  const { days, hours, minutes, seconds } = useCountdown(targetDate);
  const navigator=useNavigate();

  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-orange-500 via-white to-green-600 px-4"
    >
      <img 
      src="/btkitLOGO.png" 
      alt="logo" 
      className="w-full max-w-[200px] h-auto" 
    />

      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-slate-900 drop-shadow-lg">
        Smart India Hackathon 2025
      </h1>
      <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-6">
        Bipin Tripathi Kumaon Institute of Technology, Dwarahat (Almora) <br />
        <span className="text-orange-600">Internal Hackathon</span>
      </h2>
      <p className="text-xl mb-8 text-gray-900 italic">
        "Build Tomorrow's India Today"
      </p>

      {/* Countdown Timer */}
      <div className="grid grid-cols-4 gap-4 text-center mb-8">
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg">
          <span className="text-3xl md:text-4xl font-bold text-slate-900">{days}</span>
          <span className="text-sm md:text-base text-gray-800">Days</span>
        </div>
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg">
          <span className="text-3xl md:text-4xl font-bold text-slate-900">{hours}</span>
          <span className="text-sm md:text-base text-gray-800">Hours</span>
        </div>
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg">
          <span className="text-3xl md:text-4xl font-bold text-slate-900">{minutes}</span>
          <span className="text-sm md:text-base text-gray-800">Minutes</span>
        </div>
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg">
          <span className="text-3xl md:text-4xl font-bold text-slate-900">{seconds}</span>
          <span className="text-sm md:text-base text-gray-800">Seconds</span>
        </div>
      </div>

      {/* CTA Button */}
      <div>
        <a
          href="#register"
                  className="mt-4 px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl text-white font-semibold shadow-lg transition-colors"
        >
          Register Now
        </a>
        <button onClick={()=>{
          navigator("/info");
        }} className="ml-2 px-4 py-2 border-none rounded-lg bg-green-500 cursor-pointer shadow-lg transition-colors hover:bg-green-600">Notices & Informations</button>
      </div>
      
    </section>
  );
};

export default HeroSection;