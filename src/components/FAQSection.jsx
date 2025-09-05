import { useState } from "react";

const faqs = [
  { q: "How many members per team?", a: "6 members allowed(atleast 1 female)." },
  { q: "Who can participate?", a: "Only BTKIT students." },
  { q: "What is the judging criteria?", a: "Innovation, Impact, and Execution." },
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
      {faqs.map((faq, idx) => (
        <div key={idx} className="mb-4">
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full text-left p-4 bg-white/10 rounded-lg border border-white/20"
          >
            {faq.q}
          </button>
          {open === idx && <p className="p-4 text-gray-300">{faq.a}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQSection;
