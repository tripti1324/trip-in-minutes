import React from "react";

import { useEffect, useState } from "react";




const tabs = ["Flights", "Hotels", "Packages", "Visa", "Transportation"];

const TopTab: React.FC = () => {
    const [show, setShow] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY < 120); // hides after scrolling
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
       className={`
        fixed left-1/2 md:mx-10 -translate-x-1/2 top-[85px] md:top-[72px]
        z-30 w-full px-4 transition-all duration-300
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
      `}>
      <div
        className="
           mx-auto max-w-[92%] md:max-w-fit bg-white rounded-xl shadow-lg px-3 md:px-6 py-3 flex items-center  ">
        {tabs.map((tab, index) => (
          <React.Fragment key={tab}>
            {/* TAB */}
            <span
              className="  px-2 text-[15px] font-medium cursor-pointer transition-colors duration-200 hover:text-indigo-600
              "
            >
              {tab}
            </span>
            {/* TRANSPARENT GAP (Figma-style) */}
            {index !== tabs.length - 1 && (
             <span
  className="
    mx-1 md:mx-2   // ⬅ tighter spacing on mobile
    h-5 md:h-6
    w-[1px]
    bg-black/40 md:bg-gradient-to-b
    md:from-transparent md:via-black/45 md:to-transparent
  "
> </span>
            )}
          </React.Fragment>
        ))}
        
      </div>
    </div>
  );
};

export default TopTab;
