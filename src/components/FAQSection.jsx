import { useState } from "react";

const faqs = [
  {
    q: "Who can participate?",
    a: "All students of BTKIT Dwarahat (UG and PG) are eligible to participate. Inter-college teams are not allowed.",
  },
  {
    q: "How many members are allowed in a team?",
    a: "Each team must consist of exactly 4 members. All members must be from BTKIT, Dwarahat.",
  },
  {
    q: "What are the domains for the hackathon?",
    a: "Both Software and Hardware problem statements are available. Domains include Smart Tourism, Agriculture, Disaster Management, Education, Healthcare, Governance, Renewable Energy, Cultural Heritage, and Open Innovation.",
  },
  {
    q: "When and where will the event take place?",
    a: "The internal college-level hackathon will be held on November 4th, 2025 at the CSE Smart Classroom, BTKIT Dwarahat.",
  },
  {
    q: "What is the evaluation or judging criteria?",
    a: "Teams will be judged based on Innovation, Feasibility, Technical Approach, and Societal Impact.",
  },
  {
    q: "How can we register for the hackathon?",
    a: "Click on the 'Register Now' button on this website. You will be redirected to the Google Form to fill in your team details and submit your registration.",
  },
  {
    q: "What is the selection process?",
    a: "Top 3 teams from BTKIT will be selected at the college-level event to represent the institute at the Uttarakhand State-Level Tech Hackathon 2025.",
  }
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Frequently Asked Questions (FAQ)
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="backdrop-blur-lg bg-slate-800 border border-white/10 rounded-lg overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full text-left p-4 font-semibold text-white flex justify-between items-center"
            >
              {faq.q}
              <span className="text-orange-400">
                {open === idx ? "−" : "+"}
              </span>
            </button>
            {open === idx && (
              <p className="p-4 text-gray-300 border-t border-white/10 text-sm leading-relaxed">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
