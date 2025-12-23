import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logo } from "../../../assets";
import ThreeLine from "../../smallcomp/ThreeLinr";


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id: string) => {
    // If NOT on home (header) page
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scroll AFTER navigation to home page
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <nav className=" top-0 z-50 flex items-center justify-between px-4 py-3 bg-white text-black rounded-t-3xl">
      <img src={logo} alt="logo" className="h-8" />

      <div className="md:hidden">
    <ThreeLine />
  </div>

      <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-black">
        <li
          className="cursor-pointer hover:text-indigo-600"
          onClick={() => handleScroll("about")}
        >
          About
        </li>

        <li
          className="cursor-pointer hover:text-indigo-600"
          onClick={() => handleScroll("corporate")}
        >
          Corporate
        </li>

        <li
          className="cursor-pointer hover:text-indigo-600"
          onClick={() => handleScroll("services")}
        >
          Services
        </li>

        <li
          className="cursor-pointer hover:text-indigo-600"
          onClick={() => handleScroll("destinations")}
        >
          Destinations
        </li>

        <li
          className="cursor-pointer hover:text-indigo-600"
          onClick={() => handleScroll("footer")}
        >
          Contact
        </li>

        <button
          onClick={() => handleScroll("Inquiryform")}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Book a Trip
        </button>
      </ul>

      
    </nav>
  );
};

export default Navbar;
