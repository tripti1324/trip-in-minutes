import { Routes, Route } from "react-router-dom";


import Header from "./components/Header/Header";
import Home from "./pages/home/Home";

import Corporate from "./pages/corporate/corporate";
import Services from "./pages/services/Services";
import Contact from "./pages/contactUs/Contact";
import Destination from "./pages/destinations/Destination";
import Testimonial from "./pages/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import About from "./pages/about/About";


function App() {
  return (
    <>
       <Routes>
      {/* MAIN WEBSITE */}
      <Route
        path="/"
        element={
          <>
         
            <Header />
          
            
          </>
        }
      />

      {/* PRIVACY POLICY – SEPARATE PAGE */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
   
      

      
      
      
      
  </>
  );
}

export default App;

