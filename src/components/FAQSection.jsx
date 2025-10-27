import React, { useState } from "react";

const faqs = [
  {
    q: "Who can participate?",
    a: "All students enrolled in AICTE or University-affiliated institutes or colleges across Uttarakhand can participate. Only students of BTKIT Dwarahat can register for the internal institute-level round.",
  },
  {
    q: "How many members are allowed in a team?",
    a: "Each team must consist of 4–6 members, with at least one female participant. A faculty mentor from the institute must guide every team.",
  },
  {
    q: "What are the domains or themes for the hackathon?",
    a: "The hackathon will cover multiple AI and Coding-based domains: Smart Education, AI in Agriculture, Forestry, Health, Tourism, Cybersecurity, and Indian Languages.",
  },
  {
    q: "When and where will the event take place?",
    a: "The internal institute-level hackathon will be organized between October 16 and October 30, 2025, at the CSE Smart Classroom, BTKIT Dwarahat. The top 3 selected teams will participate in the Final State-Level Hackathon in Dehradun from November 2 to 9, 2025.",
  },
  {
    q: "What is the evaluation or judging criteria?",
    a: "Teams will be evaluated on the basis of Innovation, Relevance to the problem statement, Technical Feasibility, Scalability, Presentation, and Societal Impact.",
  },
  {
    q: "How can we register for the hackathon?",
    a: "Participants can register through the official link provided on this website. Each team must choose one problem statement and submit an idea summary with a proposed solution.",
  },
  {
    q: "What is the selection process?",
    a: "Each institute will shortlist its top 3 teams based on evaluation parameters. These teams will then represent their institute at the State-Level Hackathon in Dehradun during the Silver Jubilee Celebration of Uttarakhand’s formation.",
  },
  {
    q: "Is there any time limit for idea submission?",
    a: "Yes. Teams will get 72 hours to submit their idea or solution once the hackathon begins at the institute level.",
  },
  {
    q: "Who are the state-level coordinators?",
    a: "Prof. S. K. Pradhan (Director, THDC-IHET, Tehri) is the State-Level Nodal Coordinator. Contact: director@thdcihet.ac.in | +91-9300802353.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

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
              onClick={() => toggle(idx)}
              className="w-full text-left p-4 font-semibold text-white flex justify-between items-center"
              type="button"
            >
              {faq.q}
              <span className="text-orange-400">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>

            {openIndex === idx && (
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
