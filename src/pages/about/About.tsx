import { timAboutUsImg,AboutusDesktopImage, AboutusMobileVersionimagecopy} from "../../assets";
import Inquiryform from "../../components/common/Inquiryform";
import Faq from "../../components/common/Faq"
import Footer from "../../components/footer/Footer";
import MobContactBar from "../../components/common/MobContactBar";
import ThreeLine from "../../components/smallcomp/ThreeLinr";
import NavBar from "../../components/common/navbar/NavBar";
import TopTab from "../../components/smallcomp/TopTab";

const About = () => {
  return (
    <section className="bg-white ">
      {/* HERO */}
      <MobContactBar />
        <NavBar/>
      <div className="relative w-full min-h-[520px] md:min-h-[580px] rounded-2xl overflow-hidden mx-8 mt-6 ">

  {/* MOBILE BACKGROUND */}
  <div
    className="absolute inset-0 w-full md:hidden"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${AboutusMobileVersionimagecopy})`,
      backgroundSize: "125% auto",
      backgroundPosition: "50% 35%",
    }}
  />

  {/* DESKTOP BACKGROUND */}
  <div
    className="absolute inset-0 hidden md:block"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${AboutusDesktopImage})`,
      backgroundSize: "120% auto",
      backgroundPosition: "center",
    }}
  />
  <div className="relative z-10 flex items-center md:block min-h-full">
        
        <TopTab/>
       
        <div className="max-w-10xl mx-auto px-4 sm:px-6 pt-24 pb-12 md:py-16">
          <h1 className="text-3xl sm:text-2xl md:text-4xl text-white font-semibold leading-tight">
              Why We Exist — and Why <br />Your Journeys Matter to Us. <br />
            </h1>
          <h1 className="text-6xl sm:text-5xl md:text-8xl text-white font-bold leading-tight">
             About Us
          </h1>
        </div>
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
             Travel should feel effortless that’s 
the philosophy behind Trip in Minutes.
We’re a modern travel concierge built for 
today’s smart explorers: the solo traveler 
chasing new horizons, the content creator 
capturing moments, the family looking for
 stress-free vacations, and the corporate 
professional who values efficient planning.
            </p>

            <p className="text-gray-900 mb-4 leading-relaxed">
             Our approach is simple: quick coordination, seamless planning, warm 
guidance, and beautifully curated travel experiences.
            </p>

             <p className="text-gray-900 mb-4 leading-relaxed">
             From flights and stays to full-scale travel design, we bring together technology, insight,
              and passion to make your journeys smoother, smarter, and more meaningful.
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
