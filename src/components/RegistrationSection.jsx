const RegistrationSection = () => {
  return (
    <section
      id="register"
      className="py-20 px-6 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-green-400">
        Register Your Team
      </h2>
      <p className="mb-6 text-gray-300">
        Form your dream team and showcase your innovation at the{" "}
        <span className="font-semibold text-orange-400">
          BTKIT Internal Hackathon 2025
        </span>
        . Winning teams will qualify to represent our institute in the{" "}
        <span className="font-semibold">National Smart India Hackathon (SIH)</span>.
      </p>

      <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 text-left mb-8">
        <h3 className="text-xl font-semibold mb-4 text-orange-300">
          ✅ Eligibility Criteria
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>
            Each team must have <span className="font-semibold">6 members</span>.
          </li>
          <li>
            At least <span className="font-semibold">1 female member</span> is
            mandatory.
          </li>
          <li>
            All members must be current{" "}
            <span className="font-semibold">BTKIT students</span>.
          </li>
          <li>
            Interdisciplinary teams (students from different branches) are
            encouraged.
          </li>
          <li>
            Each student can participate in only{" "}
            <span className="font-semibold">one team</span>.
          </li>
        </ul>
      </div>

      <a
        href="https://forms.gle/PncEov3mr4jTDieR9"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 mt-4 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold shadow-lg transition"
      >
        Go to Registration Form
      </a>
    </section>
  );
};

export default RegistrationSection;
