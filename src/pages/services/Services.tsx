import { girlWithLuggage} from "../../assets";
import { TripCuate } from "../../assets";

import React from "react";


// src/data/services.ts
export const services = [
  {
    icon: "✈️",
    title: "Tailored Holiday Planning",
    desc:
      "Personalised itineraries crafted to reflect your travel style, preferences and pace — designed with precision and care.",
  },
  {
    icon: "🏨",
    title: "Flights, Hotels & Stays",
    desc:
      "Seamless booking support with handpicked stays and reliable partners to ensure comfortable travel.",
  },
  {
    icon: "🎒",
    title: "Creator & Explorer Travel",
    desc:
      "Flexible routes, scenic spots and production-friendly planning for creators and adventure seekers.",
  },
  {
    icon: "🏢",
    title: "Corporate & Group Travel",
    desc:
      "Organised, professional travel support for teams and events, with centralised coordination and clear billing.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family & Group Getaways",
    desc:
      "Well-planned vacations that help you create lasting memories without the stress of logistics.",
  },
  {
    icon: "🎲",
    title: "Ready-to-Book Experiences",
    desc:
      "Curated packages for those who want a thoughtfully planned escape without the hassle.",
  },
  {
    icon: "🚗",
    title: "Transfers & Local Mobility",
    desc:
      "Reliable car rentals and on-ground transport arranged through trusted partners.",
    fullWidth: true,
  },
];


 
const Services: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 "   >    

      <div className="max-w-7xl mx-auto px-5">


        {/* HEADING */}
        {/* MOBILE HEADER (TripCuate + Girl) */}
<div
  className="
    relative
    lg:hidden
    bg-no-repeat bg-[length:75%] bg-right
    min-h-[260px]
    flex items-end
    pb-6 pl-4
  "
  style={{ backgroundImage: `url(${TripCuate})` }}
>
  {/* GIRL IMAGE ON TOP */}
  <img
    src={girlWithLuggage}
    alt="Traveller"
    className="
      absolute
      right-0 bottom-0
      h-[90%]
      z-20
      object-contain
    "
  />

  {/* TEXT */}
  <h2 className="relative z-30 text-3xl font-bold">
    Our Services
  </h2>
</div>
<h2 className="relative z-30 text-3xl hidden lg:block font-bold">
    Our Services
  </h2>


        <div className="grid lg:grid-cols-[1.25fr_.75fr] gap-4 items-start" style={{ backgroundImage: `url(${TripCuate})`, backgroundSize: "75%", backgroundPosition: "right",backgroundRepeat: "no-repeat" }} >

          {/* LEFT – SERVICES */}
          <div className="relative z-10 grid grid-cols-2 gap-6 sm:gap-12 max-w-[1040px] min-h-[760px] order-2 lg:order-1">
            {services.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-8  ${
                  item.fullWidth ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-start h-fit min-h-280">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-md leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

            {/* RIGHT – GIRL + BG */}
            <div className="relative flex justify-end items-end order-1 lg:order-2 mb-10 lg:mb-0 min-h-[760px] h-full hidden lg:block">

            {/* CLOUD BG (desktop + mobile) */}             

            {/* GIRL IMAGE */}
            <img
              src={girlWithLuggage}
              alt="Traveller"
              className="relative z-20 h-full object-bottom -translate-x-2/3"
            />
            </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
