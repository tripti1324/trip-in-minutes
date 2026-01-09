import { useState } from "react";
import {
  Bali,
  Bangkok1,
  Dubai,
  England,
  France,
  Italy,
  Malaysia,
  Maldives,
  Mauritius1,
  Qatar,
  SaudiArabia,
  Singapore,
  Vietnam,
  Goa,
  Andaman,
  Kerala,
  Uttarakhand,
  JammuKashmir,
  Karnataka,
  Lakshadweep,
  rajsthan,
  HimachalPradesh,
} from "../../assets";

const domestic = [
  { name: "Goa", img: Goa },
  { name: "Andaman", img: Andaman },
  { name: "Kerala", img: Kerala },
  { name: "Himachal Pradesh", img: HimachalPradesh },
  { name: "Uttarakhand", img: Uttarakhand },
  { name: "Rajasthan", img: rajsthan },
  { name: "Jammu & Kashmir", img: JammuKashmir },
  { name: "Karnataka", img: Karnataka },
  { name: "Lakshadweep", img: Lakshadweep },
];

const international = [
  { name: "Bali", img: Bali },
  { name: "Bangkok", img: Bangkok1 },
  { name: "Dubai", img: Dubai },
  { name: "England", img: England },
  { name: "France", img: France },
  { name: "Italy", img: Italy },
  { name: "Malasiya", img: Malaysia },
  { name: "Maldives", img: Maldives },
  { name: "Mauritius", img: Mauritius1 },
  { name: "Qatar", img: Qatar },
  { name: "SaudiArabia", img: SaudiArabia },
  { name: "Singapore", img: Singapore },
  { name: "Vietnam", img: Vietnam },
];

const ExploreDestination = () => {
  const [activeTab, setActiveTab] = useState<
    "domestic" | "international"
  >("domestic");

  return (
    <section id="destinations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* TABS */}
        <div className="flex justify-center gap-4 mb-8 md:mb-12">
          <button
            onClick={() => setActiveTab("domestic")}
            className={`w-[134px] h-[38px]
              md:w-[353px] md:h-[100px]
              rounded-lg font-semibold
              text-[15px] md:text-[38px]
              flex items-center justify-center ${
                activeTab === "domestic"
                  ? "bg-indigo-900 text-white"
                  : "bg-gray-100 text-indigo-900"
              }`}
          >
            DOMESTIC
          </button>

          <button
            onClick={() => setActiveTab("international")}
            className={`w-[134px] h-[38px]
              md:w-[353px] md:h-[100px]
              rounded-lg font-semibold
              text-[15px] md:text-[38px]
              flex items-center justify-center ${
                activeTab === "international"
                  ? "bg-indigo-900 text-white"
                  : "bg-gray-100 text-indigo-900"
              }`}
          >
            INTERNATIONAL
          </button>
        </div>

        {/* CARDS */}
        {activeTab === "domestic" && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-10 auto-rows-fr">
            {domestic.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-md
                  p-2 sm:p-3 lg:p-6
                  min-h-[126px] sm:min-h-[200px] lg:min-h-[332px]
                  text-center
                  ${index === domestic.length - 1 ? "hidden sm:block" : ""}`}
              >
                <div className="rounded-3xl overflow-visible sm:overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded-3xl object-cover w-full
                      h-[76px] sm:h-[120px] lg:h-[200px]"
                  />
                </div>

                <p
                  className="mt-2 sm:mt-5 lg:mt-8
                    font-semibold text-gray-900
                    text-[13px] sm:text-lg lg:text-[36px]"
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "international" && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-10 auto-rows-fr">
            {international.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-md
                  p-2 sm:p-3 lg:p-6
                  min-h-[126px] sm:min-h-[200px] lg:min-h-[332px]
                  text-center
                  ${index === international.length - 1 ? "hidden sm:block" : ""}`}
              >
                <div className="rounded-3xl overflow-visible sm:overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded-3xl object-cover w-full
                      h-[76px] sm:h-[120px] lg:h-[200px]"
                  />
                </div>

                <p
                  className="mt-2 sm:mt-5 lg:mt-8
                    font-semibold text-gray-900
                    text-[13px] sm:text-lg lg:text-[36px]"
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreDestination;
