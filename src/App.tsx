import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contactUs/Contact";
import About from "./pages/about/About";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import WhatsAppFloating from "./components/smallcomp/WhatsAppFloating";
import FloatingCallButton from "./components/smallcomp/FloatingCallButton";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* GLOBAL FLOATING BUTTONS */}
      <FloatingCallButton />
      <WhatsAppFloating />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
