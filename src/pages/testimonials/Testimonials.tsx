import React from "react";
import { testinomial } from "../../assets";

type Testimonial = {
  text: string;
  author: string;
};

const testimonials: Testimonial[] = [
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

const Testimonials: React.FC = () => {
  return (
    /* 🔴 HIDDEN ON MOBILE */
    <section className="hidden md:block w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12">Testimonials</h2>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-white shadow-xl overflow-hidden"
            >
              {/* Blue Quote Column */}
              <div className="absolute left-0 top-0 h-full w-14  flex items-start justify-center pt-6 z-10">
                <img src={testinomial} alt="quote" className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="pl-16 pr-6 py-6 relative z-10">
                <p className="text-black text-m leading-relaxed mb-4">
                  {item.text}
                </p>
                <p className="font-semibold text-gray-900 text-sm">
                  – {item.author}
                </p>
              </div>

              
             {/* Bottom Cut with Shadow */}
<div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden">
  {/* shadow */}
  <div className="absolute bottom-0 left-0 w-full h-full bg-black/10 blur-lg translate-y-2" />

  {/* cut shape */}
  <div className="absolute bottom-0 left-0 w-full h-full bg-white transform skew-y-[-4deg] origin-bottom-left" />
</div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
