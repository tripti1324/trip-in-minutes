import { logo,ContactuspageImage , ContactusMobileVersionpageImage1} from "../../assets";
import Faq from "../../components/common/Faq"
import Footer from "../../components/footer/Footer";
import Inquiryform from "../../components/common/Inquiryform";
import MobContactBar from "../../components/common/MobContactBar";
import ThreeLine from "../../components/smallcomp/ThreeLinr";
import NavBar from "../../components/common/navbar/NavBar";
import TopTab from "../../components/smallcomp/TopTab";

const Contact = () => {
  return (
    <div className=" bg-white">
      <MobContactBar />
          <NavBar/>
            <TopTab/>

      {/* HERO */}
      
        <section className="relative h-[420px] rounded-2xl overflow-hidden mx-8 mt-6">

  {/* MOBILE BACKGROUND */}
  <div
    className="absolute  inset-0 md:hidden"
    style={{
      backgroundImage: `url(${ContactusMobileVersionpageImage1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* DESKTOP BACKGROUND */}
  <div
    className="absolute inset-0 hidden md:block"
    style={{
      backgroundImage: `url(${ContactuspageImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}

    
  />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />


          {/* Text */}
          <div className="relative z-10 h-full flex items-center justify-center md:justify-start">
            <div className="text-white
    px-6 md:px-20
    text-center md:text-left">
              <p className="
        text-[17px] md:text-[40px] mb-0 leading-[22px] md:leading-[44px] ">
                Tell Us Your Travel Idea
              </p>
              <p className="text-[17px] md:text-[40px] mb-0 leading-[22px] md:leading-[44px]">
                We’ll Shape the Journey.
              </p>
              <h1 className="font-bold
        text-[38px]        
        md:text-[70px]">
                Contact us
              </h1>
            </div>
          </div>
      

      </section>
       <div className="mt-16 ml-0">
        <Inquiryform />
       </div>
         <Faq/>
        <Footer/>
    </div>
  );
};

export default Contact;
