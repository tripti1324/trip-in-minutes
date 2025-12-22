import { timAboutUsImg,logo,AboutusDesktopImage } from "../../assets";
import Inquiryform from "../../components/common/Inquiryform";
import Faq from "../../components/common/Faq"
import Footer from "../../components/footer/Footer";
import MobContactBar from "../../components/common/MobContactBar";

const About = () => {
  return (
    <section className="bg-white">
      {/* HERO */}
      <div
        className="mx-6 mt-4 rounded-3xl overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${AboutusDesktopImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MobContactBar />

        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white text-black rounded-t-3xl">
          <img src={logo} alt="logo" className="h-8" />

          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#corporate">Corporate</a>
            <a href="#testimonial">Testimonials</a>
            <a href="#contact">Contact</a>
          </ul>

          <button className="hidden lg:block bg-indigo-700 text-white px-4 py-2 rounded-full text-xs font-semibold">
            Book a Trip
          </button>
          <div className="md:hidden text-2xl cursor-pointer">
  ☰
</div>
        </nav>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <h1 className="text-xl font-semibold leading-tight">
              Why We Exist — and Why <br />Your Journeys Matter to Us. <br />
            </h1>
          <h1 className="text-4xl font-bold leading-tight">
             About Us
          </h1>
        </div>
      </div>

      

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-0 py-16">
      
       

      <section id="about" className="w-full bg-white py-20">
        <div className="max-w-9xl mx-auto px-4 md:ml-[-80px] grid md:grid-cols-2 gap-12 items-center ">
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left max-w-md mx-auto md:max-w-none">
            <h2 className="text-3xl font-bold mb-6">ABOUT US</h2>

            <p className="text-gray-900 mb-2 leading-relaxed">
              Trip in Minutes is a modern travel service built to make planning effortless and joyful.
               We combine smart coordination, curated experiences and warm, personalised support to 
               design journeys that match your style  whether you're exploring solo, creating travel
                content, enjoying time with family and friends, or travelling for business.
            </p>

            <p className="text-gray-900 mb-4 leading-relaxed">
              Our focus is on clarity, quality and thoughtful execution. 
              We provide fast, reliable support where it matters, and careful
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
   




      </div>
      <Inquiryform />
      <Faq />
      <Footer/>

    </section>

    
  );
};

export default About;
