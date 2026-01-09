import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Contact from "./pages/contactUs/Contact";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import About from "./pages/about/About";
import WhatsAppFloating from "./components/smallcomp/WhatsAppFloating";
import FloatingCallButton from "./components/smallcomp/FloatingCallButton";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Global components */}
      <Header />
      <FloatingCallButton />
      <WhatsAppFloating />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={null} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
