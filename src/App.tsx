import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Contact from "./pages/contactUs/Contact";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import About from "./pages/about/About";
function App() {
  return (
    <div className="w-full overflow-x-hidden">
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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
