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
import ThreeLine from "../smallcomp/ThreeLinr";
import Navbar from "../common/navbar/NavBar";
import Services from "../../pages/services/Services";
import TopTab from "../smallcomp/TopTab";
import TopTabs from "../smallcomp/TopTab";

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
        className="mx-6 mt-4 rounded-3xl  text-whiterelative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${afterheaderDesktopview})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       <Navbar/>
       
       <TopTab/>
        



        {/* HERO CONTENT */}
        <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-12 py-10 gap-10">
          {/* LEFT */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-white leading-tight">
              Travel Simplified.
              <br />
              Experiences Amplified.
            </h1>

            <p className="mt-4 text-sm text-white opacity-90">
              For travelers, explorers, creators, families, friends, and
              corporate — we curate travel that flows as effortlessly as your
              dreams.
            </p>

            <div className=" flex gap-3 mt-6">
              <div className="flex items-center gap-3 bg-white text-black px-5 py-2.5 rounded-2xl text-xs shadow-sm">
                <img src={flashIcon} className="h-5 w-5 shrink-0" />
                <div className="leading-tight">
  <p className="font-semibold text-sm">Responsive Support</p>
  <p className="text-[11px] text-gray-600">
    Confirmations in minutes
  </p>
</div>
              </div>

              <div className="flex items-center gap-3 bg-white text-black px-5 py-2.5 rounded-2xl text-xs shadow-sm">
                <img src={earthIcon} className="h-5 w-5 shrink-0" />
                <div>
                  <p className="font-semibold">Wide Reach</p>
                  <p>Domestic & international</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-transparent backdrop-transparent-sm p-6 rounded-2xl w-full lg:w-[420px] ">
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
                rows={5}
                className="px-4 py-3 rounded-lg bg-transparent border border-white/40 text-white text-sm placeholder-white/70 focus:outline-none"
                placeholder="Message"
              />

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button 
                  type="submit"
                  disabled={!isFormValid}
                  className="bg-indigo-900 hover:bg-indigo-700 px-8 py-2 w-36 rounded-lg text-sm text-white flex items-center justify-center"
                >
                Send Inquiry
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    const section = document.getElementById('destinations');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white/90 text-black hover:bg-slate-400 px-8 py-2 rounded-lg text-bold"
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
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-center md:text-left">ABOUT US</h2>

            <p className="text-black mb-4 text-base md:text-lg leading-relaxed text-center md:text-left max-w-lg mx-auto md:max-w-none">
             Trip in Minutes is a modern travel service built to make planning effortless and joyful.
              We combine smart coordination, curated experiences and warm, personalised support to design
               journeys that match your style  whether you're exploring solo, creating travel content, 
               enjoying time with family and friends, or travelling for business.
            </p>

            <p className="text-black mb-4 text-base md:text-lg leading-relaxed text-center md:text-left max-w-lg mx-auto md:max-w-none hidden lg:block">
              Our approach is simple: quick coordination, seamless planning, warm 
              guidance, and beautifully curated travel experiences.
            </p>

            <p className="text-black mb-4 text-base md:text-lg leading-relaxed text-center md:text-left max-w-lg mx-auto md:max-w-none hidden lg:block">
              From flights and stays to full-scale travel design, we bring together technology,
               insight, and passion to make your journeys smoother, smarter, and more meaningful.
            </p>

            <p className="text-black mb-4 text-base md:text-lg leading-relaxed text-center md:text-left max-w-md mx-auto md:max-w-none lg:hidden">
              Our focus is on clarity, quality and thoughtful execution. We provide fast, reliable support where it matters,
               and careful curation where
               it counts — all to ensure your travel moments are meaningful and stress-free.
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


 <Services/>
      {/* NEXT SECTIONS GO HERE (Services, Testimonial, etc.) */}

<section id="corporate" className="w-full bg-white py-16">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING WRAPPER */}
    <div className="relative overflow-hidden md:grid md:grid-cols-[1fr_auto] md:items-start md:gap-6">

      {/* MOBILE BG IMAGE (RIGHT SIDE ONLY) */}
      <div
        className="
          absolute 
    -right-10 top-0            // FIX: align with heading top
    h-[125%]                 // FIX: closer to Figma height
    w-[72%]                  // FIX: matches Figma width
    bg-no-repeat bg-cover    // FIX: Figma-style coverage
    bg-right
    md:hidden
    z-0
        "
        style={{ backgroundImage: `url(${Mice})` }}
      />

      {/* HEADING */}
      <div className="md:pl-2">
     <h2 className="relative z-10 text-4xl font-bold leading-[1.15] px-6 md:px-0">
     <span className="md:hidden">Corporate,</span>
     <span className="hidden md:inline">Corporate, Travel, Simplified</span>
     <br className="md:hidden" />
     <span className="md:hidden">Travel,</span>
     <br className="md:hidden" />
     <span className="md:hidden">Simplified</span>
</h2>
</div>
</div>
<div className="hidden md:flex justify-end -mt-6">
  <img
    src={Mice}
    alt="Corporate Travel Illustration"
    className="w-[540px]"
  />
</div>
    
    <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center mt-6">

    {/* PARAGRAPH (NORMAL) */}
    <p className="relative z-10 mt-4 text-gray-700 leading-[1.65] max-w-[560px] px-6 md:px-0">
      From business trips and team movements to events and incentive tours —
      our Corporate Travel Solutions offer smooth coordination, smart planning,
      and reliable support for every level of corporate travel.
      We streamline the entire experience so your teams can move confidently,
      efficiently, and without disruptions.
    </p>
    <div className="hidden md:flex justify-end mt-8">
 
</div>
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
