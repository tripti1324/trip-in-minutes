import { logo,ContactuspageImage } from "../../assets";
import Faq from "../../components/common/Faq"
import Footer from "../../components/footer/Footer";
import Inquiryform from "../../components/common/Inquiryform";
import MobContactBar from "../../components/common/MobContactBar";
import ThreeLine from "../../components/smallcomp/ThreeLinr";
import NavBar from "../../components/common/navbar/NavBar";
import TopTab from "../../components/smallcomp/TopTab";

const Contact = () => {
  return (
    <div className="w-full bg-white">
      <MobContactBar />
      
          <NavBar/>
          <TopTab/>
      
      

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6">
        <div
          className="relative h-[420px] rounded-2xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${ContactuspageImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text */}
          <div className="relative z-10 h-full flex items-center">
            <div className="text-white px-8">
              <p className="text-sm mb-2">
                Tell Us Your Travel Idea
              </p>
              <p className="text-lg mb-4">
                We’ll Shape the Journey.
              </p>
              <h1 className="text-4xl md:text-5xl font-bold">
                Contact us
              </h1>
            </div>
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
