import React from "react";

const tabs = ["Flights", "Hotels", "Packages", "Visa", "Transportation"];

const TopTab: React.FC = () => {
  return (
    <div
      className="
        absolute left-1/2 -translate-x-1/2 top-[85px] md:top-[72px] z-30 w-full px-4">
      <div
        className="
           mx-auto max-w-fit bg-white rounded-xl shadow-lg px-3 md:px-6 py-3 flex items-center  ">
        {tabs.map((tab, index) => (
          <React.Fragment key={tab}>
            {/* TAB */}
            <span
              className="  px-4 text-[15px] font-medium cursor-pointer transition-colors duration-200 hover:text-indigo-600
              "
            >
              {tab}
            </span>
            {/* TRANSPARENT GAP (Figma-style) */}
            {index !== tabs.length - 1 && (
              <span
                className=" mx-2 h-6 w-[1px] bg-gradient-to-b
  from-transparent via-black/45 to-transparent"/>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TopTab;
