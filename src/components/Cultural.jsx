import React from "react";
// import bgImage from "../assets/cultural.jpeg"; // adjust the path based on your folder structure

const CulturalEventsSection = () => {
  const events = [
    {
      id: 1,
      name: "Sketching (Solo)",
      duration: "02 Hrs",
      themes: [
        "Culture & Heritage",
        "Nature & Landscape",
        "Unity in Diversity of Hills",
        "From Struggle to Pride",
        "Harmony between Nature & Humanity",
        "Spirit of Devbhoomi",
      ],
      remarks: "A3 sheet & chart paper",
    },
    {
      id: 2,
      name: "Singing & Dancing",
      duration:
        "Solo: 4min (Singing) | 4min (Dancing)\nGroup: 6min (Singing) | 7min (Dancing)",
      themes: [
        "Freestyle & Fusion",
        "Folk & Contemporary",
        "Western & Classical",
        "Choliya, Nati, Jhora",
      ],
      remarks: "Solo & Group categories available",
    },
    {
      id: 3,
      name: "Photography & Filmmaking",
      duration: "Photography: Individual\nFilmmaking: 3-5 minutes",
      themes: [
        "Soul of Himalaya",
        "Pahadi Life - Simple yet Beautiful",
        "Dance & Rhythm of Uttarakhand",
        "Festivals of the Hills",
        "Colors of Kumaon & Garhwal",
        "Colours of culture",
        "From Struggle to Statehood",
        "Journey to My Routes",
        "Voice of the Hills",
        "Rhythm of hills",
        "Pahadi life",
        "Chipkoo - The Spirit of Lives On",
      ],
      remarks: "Individual participation only",
    },
    {
      id: 4,
      name: "Music Band",
      duration: "10 Min",
      themes: ["Group Performance"],
      remarks: "Group event",
    },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/cultural.jpeg"
          alt="Uttarakhand Celebration"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/95" />
      </div>

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-orange-400 drop-shadow-md">
          Silver Jubilee Celebration
        </h2>
        <p className="text-2xl md:text-3xl text-orange-300 font-semibold mb-2 tracking-wide">
          Uttarakhand Foundation Day
        </p>
        <p className="text-cyan-200 italic">
          “Enhancing Social and Cultural Skills”
        </p>
      </div>

      {/* Overview */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border-2 border-orange-400/40 rounded-2xl p-8 mb-12 shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4 text-center">
          🎭 Cultural Events Overview
        </h3>
        <p className="text-gray-200 text-center mb-3 leading-relaxed max-w-3xl mx-auto">
          Join us in celebrating Uttarakhand’s vibrant traditions, art, and
          spirit. Showcase your creativity and express the true essence of{" "}
          <span className="text-cyan-300 font-semibold">Devbhoomi!</span>
        </p>
        <p className="text-gray-300 text-center text-sm">
          📅 <span className="font-semibold">Date:</span> 2–9 November 2025 | 📍{" "}
          <span className="font-semibold">Venue:</span> MPH | 🏛️{" "}
          <span className="font-semibold">Organised by:</span> BTKIT Dwarahat
        </p>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-orange-400/30 rounded-2xl p-6 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xl font-bold text-orange-300">
                {event.name}
              </h4>
              <span className="text-sm font-semibold bg-cyan-700/40 text-cyan-200 px-3 py-1 rounded-full">
                #{event.id}
              </span>
            </div>

            <p className="text-gray-300 text-sm mb-3">
              <span className="text-green-400 font-semibold">⏱️ Duration:</span>{" "}
              {event.duration}
            </p>

            <p className="font-semibold mb-2 text-orange-300">🎨 Themes:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {event.themes.map((theme, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gradient-to-r from-cyan-600/30 to-blue-700/30 text-cyan-100 px-3 py-1 rounded-full border border-cyan-400/30"
                >
                  {theme}
                </span>
              ))}
            </div>

            <p className="text-gray-300 text-sm border-t border-slate-600 pt-3">
              <span className="text-blue-300 font-semibold">📌 Details:</span>{" "}
              {event.remarks}
            </p>
          </div>
        ))}
      </div>

      {/* Guidelines */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-400/40 rounded-2xl p-8 shadow-md">
        <h3 className="text-2xl font-bold text-orange-300 mb-6 text-center">
          ✨ Important Guidelines
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800/40 p-5 rounded-lg border-l-4 border-cyan-400">
            <h4 className="text-cyan-300 font-bold mb-3">
              📸 Photography Requirements
            </h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Individual participation only</li>
              <li>• Max 3 photographs per participant</li>
              <li>• Min resolution: 2000px (long side)</li>
              <li>• JPEG format, max 10 MB</li>
              <li>• Original only (no AI or heavy editing)</li>
            </ul>
          </div>
          <div className="bg-slate-800/40 p-5 rounded-lg border-l-4 border-cyan-400">
            <h4 className="text-cyan-300 font-bold mb-3">
              🎬 Filmmaking Requirements
            </h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Duration: 3–5 minutes</li>
              <li>• MP4, Full HD (1080p)</li>
              <li>• Max 500 MB | Hindi/English</li>
              <li>• Background music & credits allowed</li>
              <li>• Naming: Name_Institute_Title.mp4</li>
              <li>• Submission Method: (Email/Online Portal  Link)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-gray-200 mb-4 text-lg">
          Celebrate the spirit of{" "}
          <span className="text-cyan-400 font-bold">Uttarakhand</span> through{" "}
          <span className="text-orange-400 font-bold">
            Art, Music & Culture
          </span>
        </p>
        <button onClick={()=>{
            window.open("https://forms.gle/T6UiwLL5VLhGWgKG9");
        }} className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/40">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default CulturalEventsSection;
