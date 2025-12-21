import { girlWithLuggage} from "../../assets";
import { TripCuate } from "../../assets";

const services = [
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
 {/* CLOUD / BACKGROUND IMAGE */}
const ServicesSection = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-row flex-1 gap-12" style={{
        backgroundImage: ` linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0.8)), url(${TripCuate})`,
        backgroundSize: '70%' , 
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}>
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {services.map((item, idx) => (
    <div
      key={idx}
      className={`bg-white p-6 rounded-2xl shadow-md ${
        item.fullWidth ? "sm:col-span-2" : ""
      }`}
    >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:flex relative justify-center items-end">
  
  {/* GIRL IMAGE */}
  <img
    src={girlWithLuggage}
    alt="Travel Girl"
    className="relative z-10 max-h-[820px] translate-x-100"
  />




          {/* Decorative clouds */}
          <div className="absolute -z-10 bottom-0 right-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
