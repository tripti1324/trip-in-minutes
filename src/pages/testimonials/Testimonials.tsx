import { useState } from "react";


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




  const Testimonial = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="testimonial" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 hidden lg:flex">

        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-10">Testimonials</h2>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {testimonials.map((item, index) => (
            <div key={index} className="relative max-w-sm mx-auto">

              {/* SHADOW WRAPPER */}
<div className="relative shadow-[0_35px_60px_rgba(0,0,0,0.18)]"></div>

  {/* CLIPPED CARD */}
  <div
    className="relative bg-white p-8 pt-14 z-10"
    style={{
      clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
    }}
  >
                {/* BIG QUOTE */}
                <div className="absolute -top-4 left-6 text-indigo-900 text-6xl font-extrabold leading-none">
                  “
                </div>

                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {item.text}
                </p>

                <p className="text-sm font-semibold text-gray-900">
                  — {item.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Testimonial;
