import { useState } from "react";

const faqs = [
  {
    q: "Who is Trip in Minutes for?",
    a: "We design travel for explorers, families, creators, friends and corporate teams.",
  },
  {
    q: "Do you offer customised travel packages?",
    a: "Yes, we build personalised itineraries based on your preferences.",
  },
  {
    q: "Can you help with flight and hotel bookings?",
    a: "Absolutely. We assist with flights, hotels and local transport.",
  },
  {
    q: "Do you offer ready-made packages?",
    a: "Yes, curated experiences that are ready to book.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
   <section className="max-w-4xl px-20">
          <h2 className="text-3xl font-bold mb-8 mt-20">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex items-start gap-3 w-full text-left"
                  >
                    <span
                      className={`mt-1 transition-transform duration-200 ${
                        isOpen ? "rotate-90 text-indigo-700" : "text-black"
                      }`}
                    >
                      ▶
                    </span>

                    <span className="font-semibold text-base">
                      {item.q}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="ml-7 mt-2 text-sm text-black-700 leading-relaxed">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

    
  );
};

export default FAQSection;
