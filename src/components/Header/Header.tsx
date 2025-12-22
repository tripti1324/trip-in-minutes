import { afterheaderDesktopview,earthIcon,logo,flashIcon ,timAboutUsImg, girlWithLuggage,TripCuate, Mice} from "../../assets";
import { useState } from "react";
import{Andaman, Kerala,
 Uttarakhand,
    JammuKashmir, Karnataka, Lakshadweep,Goa, rajsthan, HimachalPradesh} from "../../assets";
import MobContactBar from "../common/MobContactBar";
import Testimonial from "../../pages/testimonials/Testimonials";
import Footer from "../footer/Footer";
import Inquiryform from "../common/Inquiryform";
import FAQSection from "../common/Faq";
 

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
const Header = () => {
    const [activeTab, setActiveTab] = useState<"domestic" | "international">(
        "domestic"
      );
      const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const isFormValid = formData.name.trim() && formData.email.trim() && formData.mobile.trim();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const form = new FormData(e.currentTarget);
          const name = form.get('name') as string;
          const email = form.get('email') as string;
          const mobile = form.get('mobile') as string;
          const message = form.get('message') as string;
          
          const text = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`;
          const whatsappUrl = `https://wa.me/917411605384?text=${encodeURIComponent(text)}`;
          window.open(whatsappUrl, '_blank');
       };


  return (
    <>
      {/* ================= HEADER / HERO ================= */}
      <MobContactBar/>
      <header
        className="mx-6 mt-4 rounded-3xl overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${afterheaderDesktopview})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white text-black rounded-t-3xl">
          <img src={logo} alt="logo" className="h-8" />

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-900">
            <li className="cursor-pointer hover:text-indigo-600" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</li>
            <li className="cursor-pointer hover:text-indigo-600" onClick={() => document.getElementById('corporate')?.scrollIntoView({ behavior: 'smooth' })}>Corporate</li>
            <li className="cursor-pointer hover:text-indigo-600" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Services</li>
            <li className="cursor-pointer hover:text-indigo-600" onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}>Destinations</li>
            <li className="cursor-pointer hover:text-indigo-600" onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}>Contact</li>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Book a Trip
            </button>
        </ul>
          <div className="md:hidden text-2xl cursor-pointer">
  ☰
</div>
        </nav>

{/* TABS */}
<div className="absolute left-1/2 -translate-x-1/2 top-16 z-20">
  <div className="bg-white text-black px-5 py-4 rounded-2xl flex items-center text-[15px] font-bold shadow whitespace-nowrap">
    
    <span className="px-3">Flights</span>
    <span className="h-6 w-px bg-gray-500 shadow-xl-gray"></span>

    <span className="px-3">Hotels</span>
    <span className="h-6 w-px bg-gray-500"></span>

    <span className="px-3">Packages</span>
    <span className="h-6 w-px bg-gray-500"></span>

    <span className="px-3">Visa</span>
    <span className="h-6 w-px bg-gray-500"></span>

    <span className="px-3">Transportation</span>

  </div>
</div>

        {/* HERO CONTENT */}
        <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-12 py-10 gap-10">
          {/* LEFT */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight">
              Travel Simplified.
              <br />
              Experiences Amplified.
            </h1>

            <p className="mt-4 text-sm opacity-90">
              For travelers, explorers, creators, families, friends, and
              corporate — we curate travel that flows as effortlessly as your
              dreams.
            </p>

            <div className="flex gap-4 mt-6">
              <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl text-xs">
                <img src={flashIcon} className="h-4 w-4" />
                <div>
                  <p className="font-semibold">Responsive Support</p>
                  <p>Confirmations in minutes</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl text-xs">
                <img src={earthIcon} className="h-4 w-4" />
                <div>
                  <p className="font-semibold">Wide Reach</p>
                  <p>Domestic & international</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl w-full lg:w-80 border border-white/30">
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="px-4 py-3 rounded-lg bg-transparent border border-white/40 text-white text-sm placeholder-white/70 focus:outline-none" 
                placeholder="Name" 
              />
              <input 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="px-4 py-3 rounded-lg bg-transparent border border-white/40 text-white text-sm placeholder-white/70 focus:outline-none" 
                placeholder="Email" 
              />
              <input 
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="px-4 py-3 rounded-lg bg-transparent border border-white/40 text-white text-sm placeholder-white/70 focus:outline-none" 
                placeholder="Mobile" 
              />
              <textarea
                name="message"
                onChange={handleInputChange}
                className="px-4 py-3 rounded-lg bg-transparent border border-white/40 text-white text-sm placeholder-white/70 focus:outline-none"
                placeholder="Message"
              />

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button 
                  type="submit"
                  disabled={!isFormValid}
                  className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 px-4 py-2 rounded-full text-xs text-white"
                >
                  Send Inquiry
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    const section = document.getElementById('destinations');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white/90 text-indigo-700 hover:bg-slate-400 px-4 py-2 rounded-full text-xs"
                >
                  Explore Destinations
                </button>
              </div>
            </form>
          </div>
          </div>
        
      </header>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">ABOUT US</h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Travel should feel effortless — that’s the philosophy behind Trip
              in Minutes. We’re a modern travel concierge built for today’s smart
              explorers.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Our approach is simple: quick coordination, seamless planning,
              warm guidance, and beautifully curated travel experiences.
            </p>

            <p className="text-gray-700 leading-relaxed">
              From flights and stays to full-scale travel design, we bring
              together technology, insight, and passion to make your journeys
              smoother, smarter, and more meaningful.
            </p>
          </div>

          {/* RIGHT IMAGE + BADGES */}
          <div className="relative flex justify-center">
            <img
              src={timAboutUsImg}
              alt="About Trip In Minutes"
              className="w-72 sm:w-96 md:w-[420px]"
            />
          </div>
        </div>
      </section>
{/* ================= Our Services SECTION ================= */}


 {/* CLOUD / BACKGROUND IMAGE */}

    <section id="services" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row gap-12" style={{
        backgroundImage: ` linear-gradient(rgba(255,255,255,), rgba(255,255,255,0.8)), url(${TripCuate})`,
        backgroundSize: '60%' , 
        backgroundPosition: "right-bottom",
        backgroundRepeat: "no-repeat",
      }}>
        
        {/* LEFT CONTENT */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">Our Services</h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl">
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
        <div className="relative flex justify-center lg:justify-end items-end lg:w-1/3">
  
  {/* GIRL IMAGE */}
  <img
    src={girlWithLuggage}
    alt="Travel Girl"
    className="relative z-10 max-h-[360px] sm:max-h-[480px] lg:max-h-[700px"/>
          {/* Decorative clouds */}
          <div className="relative z-10 max-h-[420px] sm:max-h-[520px] lg:max-h-[820px] lg:translate-x-20"></div>
        </div>
        </div>
        </section>

      {/* NEXT SECTIONS GO HERE (Services, Testimonial, etc.) */}

      <section id="corporate" className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Corporate Travel, Simplified</h2>

          <p className="text-black-700 mb-7 leading-relaxed">
            From business trips and team movements to events and incentive tours —
             our Corporate Travel Solutions offer smooth coordination, 
             smart planning, and reliable support for every level of corporate travel.
              We streamline the entire experience so your teams can move confidently, 
              efficiently, and without disruptions.
          </p>
        </div>

        {/* RIGHT IMAGE + BADGES */}
        <div className="relative flex justify-center">
          <img
            src={Mice}
            alt="About Trip In Minutes"
            className="w-300 sm:w-200 md:w-[920px]"
          />
        </div>
      </div>
    </section>

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
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-10">
            {domestic.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md p-3 sm:p-4 text-center"
              >
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="aspect-[4/3] sm:h-40 w-full object-cover"
                  />
                </div>

                <p className="mt-4 sm:mt-4 font-semibold text-gray-900">
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
    <Testimonial/>
        <Inquiryform/>
        <FAQSection/>
        <Footer/>
    </>
  );
};

export default Header;
