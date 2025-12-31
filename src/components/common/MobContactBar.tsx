import { Facebook,Phone,Instagram,linkdlin,Email } from "../../assets";


const MobContactBar = () => {
  return (
    <div className="lg:hidden w-full bg-[#1f2357] text-white">
      <div className="flex items-center justify-between px-1 py-[6px]
           text-[8px] sm:text-[8px] lg:text-[12px] leading-tight">

        {/* Phone */}
        <div className="flex md:text-left gap-1 whitespace-nowrap">
          <img src= {Phone} className="h-[12px] w-[12px]"/>
          <span>+91 7411605384 / 9082291898</span>
        </div>
  
        {/* Email */}
        <div className="flex items-center gap-0.5 ml-1 mr-0 whitespace-nowrap">
         <img src= {Email} className="h-[12px] w-[12px]"/>
          
          <a href="mailto:hello@tripinminutes.in">hello@tripinminutes.in</a>
        </div>

        {/* Follow Us */}
<div className="flex items-center gap-1 whitespace-nowrap">
  <span>Follow Us:</span>

  <a
    href="https://www.facebook.com/tripinminutes"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={Facebook} className="h-[12px] w-[12px] cursor-pointer" />
  </a>

  <a
    href="https://www.instagram.com/tripinminutes/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={Instagram} className="h-[12px] w-[12px] cursor-pointer" />
  </a>

  <a
    href="https://www.linkedin.com/company/tripinminutes/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={linkdlin} className="h-[12px] w-[12px] cursor-pointer" />
  </a>
</div>


      </div>
    </div>
  );
};

export default MobContactBar;
