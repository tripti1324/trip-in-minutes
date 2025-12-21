import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">

          {/* LOGO */}
          <div>
            <img src={logo} alt="Trip In Minutes" className="w-40 mb-4" />
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Useful links</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link to="/" className="hover:underline">✓ Home</Link></li>
              <li><Link to="/about" className="hover:underline">✓ About Us</Link></li>
              <li><Link to="/destinations" className="hover:underline">✓ Destinations</Link></li>
              <li><Link to="/contact" className="hover:underline">✓ Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline">✓ Privacy Policy</Link></li>
            </ul>
          </div>

          {/* OUR SERVICES */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Hotels</li>
              <li>✓ Flights</li>
              <li>✓ Packages</li>
              <li>✓ Visa Services</li>
              <li>✓ MICE</li>
              <li>✓ Transportation</li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-700 mb-2">
              Siv Estate, Sy No 49/283,<br />
              Rajanakunte, Bangalore North,<br />
              Karnataka, India, 560064
            </p>

            <p className="text-sm text-gray-700">
              📞 +91 7416053844
            </p>
            <p className="text-sm text-gray-700">
              📞 +91 8660047495
            </p>
            <p className="text-sm text-gray-700 mt-2">
              ✉️ help@eduacho.in
            </p>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-600 mt-12">
          © Copyright 2025 Trip In Minutes. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
