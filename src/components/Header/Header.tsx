import {
  afterheaderDesktopview,
  earthIcon,
  flashIcon,
  HomepagemobileversionImage,
  timAboutUsImg,
  Mice,
} from "../../assets";
import { useState } from "react";
import {
  Andaman,
  Kerala,
  Uttarakhand,
  JammuKashmir,
  Karnataka,
  Lakshadweep,
  Goa,
  rajsthan,
  HimachalPradesh,
} from "../../assets";

import MobContactBar from "../common/MobContactBar";
import Testimonial from "../../pages/testimonials/Testimonials";
import Footer from "../footer/Footer";
import Inquiryform from "../common/Inquiryform";
import FAQSection from "../common/Faq";
import Navbar from "../common/navbar/NavBar";
import Services from "../../pages/services/Services";
import TopTab from "../smallcomp/TopTab";

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

const Header = () => {
  const [activeTab, setActiveTab] = useState<"domestic" | "international">(
    "domestic"
  );
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid =
    formData.name.trim() && formData.email.trim() && formData.mobile.trim();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const mobile = form.get("mobile") as string;
    const message = form.get("message") as string;

    const text = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/917411605384?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* ================= HEADER / HERO ================= */}
      <MobContactBar />
      <header className="relative mx-6 mt-4 rounded-3xl overflow-hidden ">
        {/* MOBILE BACKGROUND */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${HomepagemobileversionImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* DESKTOP BACKGROUND */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${afterheaderDesktopview})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* CONTENT (UNCHANGED) */}
        <div className="relative z-10">
          <Navbar />
          <TopTab />

          {/* HERO CONTENT */}
          <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-12 py-10 gap-10">
            {/* LEFT */}
            <div className="max-w-xl mx-auto text-center lg:text-left lg:mx-0">
              <h1
                className="font-bold text-white leading-tight
    text-[clamp(1.3rem,4.2vw,2.25rem)]
    text-center lg:text-left"
              >
                <span className="block whitespace-nowrap">
                  Travel Simplified.
                </span>
                <span className="block whitespace-nowrap">
                  Experiences Amplified.
                </span>
              </h1>

              <p
                className="mt-4 text-white opacity-90
    text-[clamp(0.7rem,2.4vw,0.875rem)]
    text-center lg:text-left
    max-w-[90%] mx-auto lg:mx-0"
              >
                For travelers, explorers, creators, families, friends, and
                corporate — we curate travel that flows as effortlessly as your
                dreams.
              </p>

              <div className=" hidden md:flex gap-3 mt-6">
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
            <div
              className="bg-transparent backdrop-transparent-sm
  p-4 sm:p-6                 /* smaller padding on mobile */
  rounded-2xl
  w-full max-w-[340px]       /* mobile width like Figma */
  sm:max-w-full
  lg:w-[420px]               /* desktop unchanged */
  mx-auto    "
            >
              <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="px-4
  py-2 sm:py-3              /* smaller height on mobile */
  rounded-lg
  bg-transparent
  border border-white/40
  text-white
  text-sm
  placeholder-white/70
  focus:outline-none"
                  placeholder="Name"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="px-4
  py-2 sm:py-3              /* smaller height on mobile */
  rounded-lg
  bg-transparent
  border border-white/40
  text-white
  text-sm
  placeholder-white/70
  focus:outline-none"
                  placeholder="Email"
                />
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="px-4
  py-2 sm:py-3              /* smaller height on mobile */
  rounded-lg
  bg-transparent
  border border-white/40
  text-white
  text-sm
  placeholder-white/70
  focus:outline-none"
                  placeholder="Mobile"
                />
                <textarea
                  name="message"
                  onChange={handleInputChange}
                  rows={5}
                  className="px-4
  py-2 sm:py-3              /* smaller height on mobile */
  rounded-lg
  bg-transparent
  border border-white/40
  text-white
  text-sm
  placeholder-white/70
  focus:outline-none"
                  placeholder="Message"
                />

                <div
                  className="flex
  justify-center              /* center buttons */
  gap-2 sm:gap-3
  mt-3 sm:mt-4
  flex-nowrap  "
                >
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className="bg-indigo-900 hover:bg-indigo-700
  px-3 py-2 sm:px-6 sm:py-3
  rounded-lg
  text-[10px] xs:text-[11px] sm:text-sm       /* smaller on mobile */
  whitespace-nowrap            /* FORCE single line */
  text-white
  flex items-center justify-center"
                  >
                    Send Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const section = document.getElementById("destinations");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-white/90 text-black hover:bg-slate-400
  px-3 py-2 sm:px-6 sm:py-3
  min-w-[110px] sm:min-w-[200px]
  rounded-lg
  text-[10px] xs:text-[11px] sm:text-sm       /* responsive text */
  whitespace-nowrap            /* NO line break */
  font-semibold
  text-center"
                  >
                    Explore Destinations
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="w-full bg-white pt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2  gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold mb-3 md:mb-6 text-center md:text-left">
              ABOUT US
            </h2>

            <p className="text-black mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-lg leading-relaxed text-center md:text-left max-w-lg mx-auto md:max-w-none">
              Trip in Minutes is a modern travel service built to make planning
              effortless and joyful. We combine smart coordination, curated
              experiences and warm, personalised support to design journeys that
              match your style whether you're exploring solo, creating travel
              content, enjoying time with family and friends, or travelling for
              business.
            </p>

            <p className="text-black mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-lg leading-relaxed text-center md:text-left max-w-lg mx-auto md:max-w-none hidden lg:block">
              Our approach is simple: quick coordination, seamless planning,
              warm guidance, and beautifully curated travel experiences.
            </p>

            <p className="text-black mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-lg leading-relaxed text-center md:text-left max-w-lg mx-auto md:max-w-none hidden lg:block">
              From flights and stays to full-scale travel design, we bring
              together technology, insight, and passion to make your journeys
              smoother, smarter, and more meaningful.
            </p>

            <p className="text-black mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-lg leading-relaxed text-center md:text-left max-w-md mx-auto md:max-w-none lg:hidden">
              Our focus is on clarity, quality and thoughtful execution. We
              provide fast, reliable support where it matters, and careful
              curation where it counts — all to ensure your travel moments are
              meaningful and stress-free.
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

      <Services />
      {/* NEXT SECTIONS GO HERE (Services, Testimonial, etc.) */}

      <section id="corporate" className="w-full bg-white lg:py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING WRAPPER */}
          <div className="relative overflow-hidden md:grid md:grid-cols-[1fr_auto] md:items-start md:gap-6">
            {/* MOBILE BG IMAGE (RIGHT SIDE ONLY) */}
            <div
              className="
          absolute 
    -right-10 top-0
    h-[125%]
    w-[72%]
    bg-no-repeat bg-cover
    bg-right
    md:hidden
    z-0
        "
              style={{ backgroundImage: `url(${Mice})` }}
            />

            {/* HEADING */}
            <div className="md:max-w-[695px]">
              <h2
                className="relative z-10
  text-[24px]        // ← MOBILE 24px
  md:text-[40px]     // ← LAPTOP 40px
  font-bold
  leading-[1.1]
  px-6 md:px-0
  mb-2"
              >
                <span className="md:hidden">Corporate,</span>
                <span className="hidden md:inline mb-0">
                  Corporate, Travel, Simplified
                </span>
                <br className="md:hidden" />
                <span className="md:hidden">Travel,</span>
                <br className="md:hidden" />
                <span className="md:hidden">Simplified</span>
              </h2>
            </div>
          </div>
          <div className="relative md:grid md:grid-cols-[1fr_1fr] md:gap-12 md:items-start">
            {/* PARAGRAPH */}
            <div>
              <p
                className="relative z-10 text-black
  text-[12px]        // ← MOBILE 12px
  md:text-[30px]     // ← LAPTOP 30px
  leading-[1.7]
  max-w-[560px]
  px-6 md:px-0
  md:mt-1"
              >
                From business trips and team movements to events and incentive
                tours — our Corporate Travel Solutions offer smooth
                coordination, smart planning, and reliable support for every
                level of corporate travel. We streamline the entire experience
                so your teams can move confidently, efficiently, and without
                disruptions.
              </p>
            </div>
            {/* DESKTOP IMAGE – PARALLEL TO PARAGRAPH */}
            <div className="hidden md:flex justify-end md:-mt-6">
              <img
                src={Mice}
                alt="Corporate Travel Illustration"
                className="w-[841px] h-[432px]"
              />
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
              className={`w-[134px] h-[38px]           /* MOBILE: 134×38 */
  md:w-[353px] md:h-[100px]   /* LAPTOP: 353×100 */
  px-0 py-0                   /* let width/height control size */
  rounded-lg
  font-semibold
 text-[15px] md:text-[38px]         /* text scales with screen */
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
              className={`w-[134px] h-[38px]           /* MOBILE: 134×38 */
  md:w-[353px] md:h-[100px]   /* LAPTOP: 353×100 */
  px-0 py-0                   /* let width/height control size */
  rounded-lg
  font-semibold
  text-[15px] md:text-[38px]          /* text scales with screen */
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

          {/* INTERNATIONAL PLACEHOLDER */}
          {activeTab === "international" && (
            <div className="text-center text-gray-500 mt-10">
              International destinations coming soon 🌍
            </div>
          )}
        </div>
      </section>
      <Testimonial />
      <Inquiryform />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Header;
