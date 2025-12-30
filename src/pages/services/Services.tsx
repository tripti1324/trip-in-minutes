import { girlWithLuggage} from "../../assets";
import { TripCuate } from "../../assets";
import { useEffect, useState } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    console.log("isMobile:", mobile);
  };

  checkMobile(); // first run
  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);

  return (
    <section className="w-full bg-white py-16 "   >    

      <div className="max-w-7xl mx-auto px-5">


        {/* HEADING */}
        {/* MOBILE HEADER (TripCuate + Girl) */}
<div
  className="relative lg:hidden bg-no-repeat  bg-[length:75%] bg-right min-h-[260px] flex items-end pb-6 pl-4
  "
  style={{ backgroundImage: `url(${TripCuate})` }}
>
  {/* GIRL IMAGE ON TOP */}
  <img
    src={girlWithLuggage}
    alt="Traveller"
    className="absolute right-0 bottom-0 h-[90%] z-20 object-contain  "/>

  {/* TEXT */}
  <h2 className="relative z-30 text-3xl font-bold break-words leading-tight w-40">
    Our Services
  </h2>
</div>
<h2 className="relative z-30 text-3xl hidden lg:block font-bold">
    Our Services
  </h2>


        <div className="grid lg:grid-cols-[1.25fr_.75fr] gap-3 items-start " style={{ backgroundImage: isMobile ? "none" :`url(${TripCuate})`, backgroundSize: "75%", backgroundPosition: "right bottom 80px",backgroundRepeat: "no-repeat" }} >
          

          {/* LEFT – SERVICES */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6 w-full order-2 lg:order-1">
            {services.map((item, index) => (
              <div
                key={index}
                className={`bg-white
  rounded-[12px] lg:rounded-2xl
  shadow-md
  ${index === services.length - 1 ? "w-[319px] min-h-[78px]" : "w-[154px] min-h-[102px]"}
  sm:w-auto sm:h-auto 
  px-3 py-2 sm:p-4 lg:pt-5 lg:px-5 lg:pb-3
  overflow-hidden 
  ${item.fullWidth ? "lg:col-span-2" : ""}`}
              >
                <div className="flex items-start gap-1 sm:gap-3 w-full h-full px-0 sm:px-0">
                  <span className="w-4 h-4 shrink-0 flex items-start justify-center mt-[2px]">{item.icon}</span>
                  <div className="w-full h-full">
                    <h3 className="font-medium text-[10px] mt-2 leading-[14px] mb-[2px] sm:text-sm">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-[10px] leading-[13px] ml-0 sm:text-sm lg:text-base lg:leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

            {/* RIGHT – GIRL + BG */}
            <div className="relative flex justify-end items-end order-1 lg:order-2 mb-10 lg:mb-0 min-h-[820px] h-full hidden lg:block">

            {/* CLOUD BG (desktop + mobile) */}             

            {/* GIRL IMAGE */}
            <img
              src={girlWithLuggage}
              alt="Traveller"
              className="relative z-20 max-h-full w-[110%]  object-contain  translate-y-[20px]  -translate-x-1/2"
            />
            </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
