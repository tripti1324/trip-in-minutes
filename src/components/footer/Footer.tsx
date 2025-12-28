import { Link } from "react-router-dom";
import { useState } from "react";
import PopUpform from "../common/PopUpForm";
import logo from "../../assets/logo.png";

const servicesList = [
  "Hotels",
  "Flights",
  "Packages",
  "Visa Services",
  "MICE",
  "Transportation",
];

const Footer = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <footer className="bg-white text-[12px] lg:text-[16px] font-sans py-16 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 items-start">
          {/* LOGO */}
          <div className="col-span-1 order-3 gap-4 md:gap-12 md:order-1 flex justify-center md:justify-start mt-10 md:mt-0">
            <img
              src={logo}
              alt="Trip In Minutes"
              className="mb-4
    w-[143px] h-[62px]
    lg:w-[376px] lg:h-[164px]
    object-contain"
            />
          </div>

          {/* USEFUL LINKS */}
          <div className="col-span-1 order-1 md:order-2 px-6 md:px-0">
            <h4 className="font-bold mb-4">Useful links</h4>
            <ul className="space-y-2 text-[12px] lg:text-[16px] text-gray-700">
              <li>
                <Link to="/" className="hover:underliZne">
                  ✓ Home
                </Link>
              </li>
              <li>
                <Link to="/about#aboutSection" className="hover:underline">
                  ✓ About Us
                </Link>
              </li>
              <li>
                <Link to="/#destinations" className="hover:underline">
                  ✓ Destinations
                </Link>
              </li>
              <li>
                <Link to="/contact#Inquiryform" className="hover:underline">
                  ✓ Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy#privacyPolicy"
                  className="hover:underline"
                >
                  ✓ Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* OUR SERVICES */}
          <div className="col-span-1 px-6 md:px-0 text-[12px] lg:text-[16px] order-2 md:order-3">
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2  text-black">
             {servicesList.map((service) => (
                  <li
                    key={service}
                    onClick={() => handleServiceClick(service)}
                    className="cursor-pointer hover:text-indigo-900"
                  >
                    ✓ {service}
                  </li>
                ))}
            </ul>
          </div>

          

          {/* CONTACT US */}
          <div className="col-span-1 order-4 gap-4 md:gap-12 text-[12px] lg:text-[16px] text-center md:text-left ">
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className=" text-black mb-2">
              Siv Estate, Sy No 49/283,
              <br />
              Rajanakunte, Bangalore North, Karnataka, India, 560064
            </p>

            <p className="text-black flex items-center justify-center md:justify-start gap-2">
              <span className="hidden lg:block lg:text-[16px]">📞</span>
              <a href="tel:+917416053844" className="hover:underline">
                +91 7416053844
              </a>
            </p>

            <p className="text-black flex items-center justify-center md:justify-start gap-2">
              <span className="hidden lg:block lg:text-[16px]">📞</span>
              <a href="tel:+918660047495" className="hover:underline">
                +91 8660047495
              </a>
            </p>

            <p className="text-black flex items-center justify-center md:justify-start gap-2 mt-2">
              <span className="hidden lg:block lg:text-[16px]">✉️</span>
              <a href="mailto:help@eduacho.in" className="hover:underline">
                help@eduacho.in
              </a>
            </p>
         </div>
        </div>
 {/* POPUP FORM */}
      <PopUpform
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultService={selectedService}
      />
        {/* COPYRIGHT */}
        <div className="text-center text-[12px] md:text-[16px] lg:text-[20px] text-black mt-12">
          © Copyright 2025 Trip In Minutes. All rights reserved.
        </div>
      </div>
    </footer>

    
    
  );
};

export default Footer;
