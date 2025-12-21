import { girlWithHat } from "../../assets";
import { useState } from "react";
import Inquiryform from "../../components/common/Inquiryform";

const testimonials = [

  {
    text:
      "Trip in Minutes made our Bali trip effortless! Everything was well-organized, and the price was unbelievable. Highly recommended!",
    author: "Sanjay",
  },
  {
    text:
      "Trip in Minutes made our Bali trip effortless! Everything was well-organized, and the price was unbelievable. Highly recommended!",
    author: "Sanjay",
  },
  {
    text:
      "Trip in Minutes made our Bali trip effortless! Everything was well-organized, and the price was unbelievable. Highly recommended!",
    author: "Sanjay",
  },
];

const faqs = [
  {
    q: "Who is Trip in Minutes for?",
    a: "We design travel for everyone — explorers, families, creators, friends and corporate teams seeking reliable, well-planned journeys.",
  },
  {
    q: "Do you offer customised travel packages?",
    a: "Yes. Our travel designers build personalised itineraries based on your preferences, interests and travel style.",
  },
  {
    q: "Can you help with flight and hotel bookings?",
    a: "Absolutely. We provide seamless booking assistance for flights, hotels and local transport through vetted partners.",
  },
  {
    q: "Do you offer ready-made packages?",
    a: "Yes. Choose from a selection of curated experiences that are ready to book for a convenient and well-planned escape.",
  },
  {
    q: "How do I start planning with Trip in Minutes?",
    a: "Use our contact form or email us with your travel idea — tell us about your group size, preferred dates and any special requests, and our team will take it from there.",
  },
];



  const Testimonial = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="testimonial" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-10">Testimonials</h2>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {testimonials.map((item, index) => (
            <div key={index} className="relative max-w-sm mx-auto">

              {/* CARD */}
              <div className="relative bg-white p-6 rounded-xl shadow-lg z-10">

                {/* ANGLED CORNER */}
                <div className="absolute top-0 right-0 w-10 h-10 bg-gray-100 rotate-45 translate-x-5 -translate-y-5"></div>

                {/* BIG QUOTE */}
                <div className="absolute -top-6 left-6 text-indigo-900 text-6xl font-extrabold leading-none">
                  “
                </div>

                <p className="text-sm text-gray-700 mt-6 mb-4 leading-relaxed">
                  {item.text}
                </p>

                <p className="text-sm font-semibold text-gray-900">
                  — {item.author}
                </p>
              </div>

              {/* SLANTED BOTTOM */}
              <div className="absolute left-0 right-0 -bottom-6 h-12 bg-white shadow-lg rounded-b-xl transform -skew-y-3"></div>
            </div>
          ))}
        </div>
        
        <Inquiryform/>


        {/* FAQ SECTION (AFTER FORM) */}
        <section className="max-w-4xl mt-8 px-6">
          <h2 className="text-3xl font-bold mb-8">
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

      </div>
    </section>
  );
};

export default Testimonial;
