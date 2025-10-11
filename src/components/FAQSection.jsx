import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who can participate?",
    a: "Only students from BTKIT Dwarahat (UG/PG) are eligible to participate. Teams must register through the official Google Form link.",
  },
  {
    q: "How many members can be in a team?",
    a: "Each team can have 2 to 4 members, and it is encouraged to include at least one female participant.",
  },
  {
    q: "What are the stages of the hackathon?",
    a: "The competition is held in multiple stages: Stage 1 — College Level Screening (30 teams shortlisted), Stage 2 — Semi-Finals (10 best teams), Stage 3 — State Finals (Top 3 teams represent BTKIT).",
  },
  {
    q: "What are the problem statement domains?",
    a: "Nine domains: Smart Tourism, Agriculture, Disaster Management, Healthcare, Education, Governance, Renewable Energy, Cultural Heritage, and Open Innovation.",
  },
  {
    q: "What is the judging criteria?",
    a: "Projects will be evaluated on: Creativity (25%), Feasibility (25%), Innovation (25%), and Presentation (25%).",
  },
  {
    q: "How to register?",
    a: "Click on the 'Register Now' button on the home page. It redirects to the official Google Form where teams can fill in their details.",
  },
  {
    q: "What is the theme of the hackathon?",
    a: "Theme: 'Innovative Design for Sustainable Future' — fostering technology-driven ideas that solve real challenges in Uttarakhand.",
  },
  {
    q: "What happens after selection?",
    a: "Top 3 teams from BTKIT will be nominated to participate in the Uttarakhand State Level Hackathon 2025.",
  },
  {
    q: "Where will the hackathon be conducted?",
    a: "Venue: CSE Smart Classroom, BTKIT Dwarahat.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="backdrop-blur-lg bg-slate-800/70 border border-white/10 rounded-xl shadow-lg hover:shadow-green-500/10 transition-all duration-300"
          >
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="text-base md:text-lg font-semibold text-white">
                {faq.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-green-400 transition-transform duration-300 ${
                  open === idx ? "rotate-180" : ""
                }`}
              />
            </button>

            {open === idx && (
              <div className="p-5 pt-0 text-gray-300 text-sm md:text-base border-t border-white/10">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* <p className="text-center text-gray-400 text-sm mt-10">
        Still have questions? Contact{" "}
        <span className="text-green-400 font-semibold">
          Dr. Sachin Gaur (Coordinator) - 9412912342
        </span>
      </p> */}
    </section>
  );
};

export default FAQSection;
