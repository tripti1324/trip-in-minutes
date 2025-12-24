import { PrivacypolicyPageimage, PrivacypoliceMobileVersionPageimage } from "../../assets";
import Inquiryform from "../../components/common/Inquiryform";
import Faq from "../../components/common/Faq"
import Footer from "../../components/footer/Footer";
import MobContactBar from "../../components/common/MobContactBar";
import ThreeLine from "../../components/smallcomp/ThreeLinr";
import NavBar from "../../components/common/navbar/NavBar";
import TopTab from "../../components/smallcomp/TopTab";


const PrivacyPolicy = () => {
  return (
    <section className="bg-white">
      {/* HERO */}
      <MobContactBar />
      <NavBar/>
      
     <div className="relative h-[420px] rounded-2xl overflow-hidden mx-8 mt-6 ">
  
  {/* MOBILE BACKGROUND */}
  <div
    className="absolute inset-0 w-full md:hidden"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${PrivacypoliceMobileVersionPageimage})`,
      backgroundSize: "cover",
      backgroundPosition: "right top",
    }}
  />

  {/* DESKTOP BACKGROUND */}
  <div
    className="absolute inset-0 hidden md:block"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${PrivacypolicyPageimage})`,
      backgroundSize: "120% auto   ",
      backgroundPosition: "center",
    }}
  />

  {/* CONTENT (UNCHANGED) */}
  <div className="relative z-10 flex items-center md:block min-h-full">
    
    <TopTab/>


        
        <div className="max-w-4xl text-white mx-auto px-4 sm:px-6 py-16">
          <h1 className="text-4xl font-bold leading-tight">
            Privacy Policy <br /> Terms & Conditions
          </h1>
        </div>
      </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-5xl ml-14 px-6 py-20">
        <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
        <p className="text-gray-700 mb-8 leading-7">
          Effective date: 1 January 2025
        </p>

        <p className="text-gray-700 mb-8 leading-7">
          Trip in Minutes (“we”, “our”, “us”) is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, disclose
          and safeguard your information when you visit our website and use
          our services.
        </p>

        <h3 className="font-semibold mb-4">Information We Collect</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Personal Information:</strong> name, email, phone number,
            travel preferences and booking details.
          </li>
          <li>
            <strong>Payment Information:</strong> payments are processed via
            secure third-party gateways; we do not store card data.
          </li>
          <li >
            <strong>Usage Data:</strong> device and browsing data collected
            via cookies and analytics.
          </li>
        </ul>

        <h3 className="font-semibold mt-4 mb-4">Security</h3>
<p className="text-gray-700 mb-8 leading-7">
  We maintain administrative, technical and physical safeguards to protect your
  data. However, no system is completely secure; if a breach occurs, we will
  follow applicable laws to notify affected parties.
</p>

<h3 className="font-semibold mb-4">Cookies</h3>
<p className="text-gray-700 mb-8 leading-7">
  Cookies and similar technologies help us provide enhanced user experiences.
  You can manage cookie preferences in your browser.
</p>

{/* TERMS & CONDITIONS */}
<h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>
<p className="text-sm text-gray-500 mb-6">
  Effective date: 1 January 2025
</p>

<p className="text-gray-700 mb-8 leading-7">
  These Terms & Conditions govern your access to and use of Trip in Minutes’
  website and services. By using the site or booking services through us, you
  agree to these terms.
</p>

<h3 className="font-semibold mb-2">Bookings & Confirmation</h3>
<p className="text-gray-700 mb-8 leading-7">
  Bookings are subject to availability and may require confirmation by
  third-party providers. We will make reasonable efforts to secure the requested
  services and communicate any material changes promptly.
</p>

<h3 className="font-semibold mb-2">Payments</h3>
<p className="text-gray-700 mb-8 leading-7">
  Payments are processed through secure third-party payment processors. All
  payments are final as per the provider’s refund and cancellation policy unless
  otherwise stated.
</p>

<h3 className="font-semibold mb-2">Cancellation & Refunds</h3>
<p className="text-gray-700 mb-8 leading-7">
  Cancellation terms depend on the provider. We disclose applicable terms prior
  to booking and assist customers with cancellation and refund requests where
  permitted.
</p>

<h3 className="font-semibold mb-2">Limitation of Liability</h3>
<p className="text-gray-700 mb-8 leading-7">
  To the maximum extent permitted by law, Trip in Minutes shall not be liable for
  indirect or consequential damages related to travel bookings. Liability for
  direct damages is limited to the fees paid for the affected booking.
  </p>

<h3 className="font-semibold mb-2">Changes to Terms</h3>
<p className="text-gray-700 mb-8 leading-7">
  We may update these Terms from time to time. The latest version will be posted
  on the website with the revised effective date.
</p>

<h3 className="font-semibold mb-2">Contact</h3>
<p className="text-gray-700">
  For questions regarding this Privacy Policy or Terms, email us at{" "}
  <a
    href="mailto:hello@tripinminutes.com"
    className="text-indigo-700 underline"
  >
    hello@tripinminutes.com
  </a>
</p>
      </div>
      <Inquiryform />
      <Faq />
      <Footer/>

    </section>

    
  );
};

export default PrivacyPolicy;
