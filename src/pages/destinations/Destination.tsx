import { useState } from "react";
import{Andaman, Kerala,
 Uttarakhand,
    JammuKashmir, Karnataka, Lakshadweep,Goa, rajsthan, HimachalPradesh} from "../../assets";
  
 

const domestic = [
  { name: "Goa", img: Goa },
  { name: "Andaman", img: Andaman },
  { name: "Kerala", img: Kerala },
  { name: "HimachalPradesh", img: HimachalPradesh },
  { name: "Uttarakhand", img: Uttarakhand },
  { name: "Rajasthan", img: rajsthan },
  { name: "Jammu & Kashmir", img: JammuKashmir },
  { name: "Karnataka", img: Karnataka },
  { name: "Lakshadweep", img: Lakshadweep },
];

const Destinations = () => {
  const [activeTab, setActiveTab] = useState<"domestic" | "international">(
    "domestic"
  );

  return (
    <section id="destinations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TABS */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("domestic")}
            className={`px-8 py-2 rounded-lg font-semibold text-sm ${
              activeTab === "domestic"
                ? "bg-indigo-900 text-white"
                : "bg-gray-100 text-indigo-900"
            }`}
          >
            DOMESTIC
          </button>

          <button
            onClick={() => setActiveTab("international")}
            className={`px-8 py-2 rounded-lg font-semibold text-sm ${
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {domestic.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md p-4 text-center"
              >
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-40 w-full object-cover"
                  />
                </div>

                <p className="mt-4 font-semibold text-gray-900">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* INTERNATIONAL PLACEHOLDER */}
        {activeTab === "international" && (
          <div className="text-center text-gray-500 mt-10">
            International destinations coming soon 🌍
          </div>
        )}

      </div>
    </section>
  );
};

export default Destinations;
