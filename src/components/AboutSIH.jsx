const AboutSIH = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-5xl mx-auto text-center text-gray-200"
    >
      <h2 className="text-3xl font-bold mb-6 text-orange-400">
        About Smart India Hackathon
      </h2>
      <p className="text-lg mb-6 leading-relaxed">
        Smart India Hackathon (SIH) is a premier nationwide initiative designed to
        engage students in solving some of the most pressing challenges faced in
        everyday life. Launched to foster a culture of innovation and practical
        problem-solving, SIH provides a dynamic platform for students to develop
        and showcase their creative solutions to real-world problems.
      </p>
      <p className="text-lg mb-6 leading-relaxed">
        By encouraging participants to think critically and innovatively, the
        hackathon aims to bridge the gap between academic knowledge and practical
        application. Since its inception, SIH has garnered significant success in
        promoting out-of-the-box thinking among young minds, particularly
        engineering students across India.
      </p>
      <p className="text-lg mb-6 leading-relaxed">
        Each edition has built on the previous one, refining its approach and
        expanding its impact. The hackathon not only offers students an opportunity
        to showcase their skills but also encourages collaboration with industry
        experts, government agencies, and other stakeholders.
      </p>

      <a
        href="https://www.sih.gov.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold transition-transform transform hover:scale-105"
      >
        Learn More on Official SIH Website
      </a>

      {/* Internal Hackathon Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-4 text-green-400">
          BTKIT Internal Hackathon
        </h3>
        <p className="text-lg leading-relaxed">
          To select the best teams for the{" "}
          <span className="font-bold text-orange-400">National SIH 2025</span>, 
          Bipin Tripathi Kumaon Institute of Technology, Dwarahat, organizes an 
          internal hackathon. This serves as the gateway for students to represent 
          BTKIT at the national level. The event is not just a competition but a 
          celebration of innovation, teamwork, and problem-solving spirit.
        </p>
      </div>
    </section>
  );
};

export default AboutSIH;
