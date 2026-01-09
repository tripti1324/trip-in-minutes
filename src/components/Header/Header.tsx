import {afterheaderDesktopview,earthIcon,flashIcon,HomepagemobileversionImage} from "../../assets";
import { useState } from "react";
import MobContactBar from "../common/MobContactBar";
import Testimonial from "../../pages/testimonials/Testimonials";
import Footer from "../footer/Footer";
import Inquiryform from "../common/Inquiryform";
import FAQSection from "../common/Faq";
import Navbar from "../common/navbar/NavBar";
import Services from "../../pages/services/Services";
import TopTab from "../smallcomp/TopTab";
import FormHomePage from "../smallcomp/FormHomePage";
import HomeAboutPage from "../common/HomeAboutPage";
import CorporateHomePage from "../common/CorporateHomePage";
import ExploreDestination from "../common/ExploreDestination";

const Header = () => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* ================= HEADER / HERO ================= */}
      <MobContactBar />
      <Navbar />
      <header className="relative mx-6 mt-4 rounded-3xl overflow-hidden pt-[0px] md:pt-[0px] ">
        {/* MOBILE BACKGROUND */}
        <div
          className="absolute left-0 right-0 w-full h-full md:hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${HomepagemobileversionImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* DESKTOP BACKGROUND */}
        <div
          className="absolute left-0 right-0 h-[588px] hidden md:block"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${afterheaderDesktopview})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* CONTENT (UNCHANGED) */}
        <div className="relative z-10">
          <TopTab />
          {/* HERO CONTENT   flex flex-col lg:flex-row justify-between px-6 lg:px-12 py-10 gap-2 */}
          <div
            className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center px-6 lg:px-12 py-10 gap-2 md:min-h-[588px]"   >
            {/* LEFT */}
            <div className="max-w-xl mx-auto text-center lg:text-left lg:mx-0">
              <h1
                className="font-bold text-white leading-tight text-[23px] sm:text-[53px] text-center lg:text-left">
                <span className="block whitespace-nowrap">
                  Travel Simplified.
                </span>
                <span className="block whitespace-nowrap">
                  Experiences Amplified.
                </span>
              </h1>

              <p
                className="mt-4 text-white opacity-90 text-[9px] sm:text-[21px] text-center lg:text-left max-w-[90%] mx-auto lg:mx-0"
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
            <FormHomePage />
          </div>
        </div>
      </header>
      <HomeAboutPage />
      <Services />
      <CorporateHomePage />
      <ExploreDestination />
      <Testimonial />
      <Inquiryform />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Header;
