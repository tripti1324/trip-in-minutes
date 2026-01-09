import { useState } from "react";
import { girlWithHat } from "../../assets"
import { sendEmail } from "../../hooks/ContactForm";


const Inquiryform = () => {
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });
    const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: "" }
  });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const isFormValid = formData.name.trim() && formData.email.trim() && formData.mobile.trim();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setStatus((prev) => ({ ...prev, submitting: true }));

  const payload = {
    name: formData.name,
    email: formData.email,
    mobile: formData.mobile,
    message: (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement)?.value,
  };

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/hello@tripinminutes.in",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (response.ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" },
      });

      setFormData({ name: "", email: "", mobile: "" });
      (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value = "";
    } else {
      throw new Error(data.message || "Form submission failed");
    }
  } catch (error) {
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: true, msg: "Something went wrong. Try again." },
    });
  }
};


  return (
    <section id="Inquiryform">  
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-20 items-start">
        {/* IMAGE - Mobile First */}
        <div className="relative order-1 lg:order-2">
         

          {/* IMAGE */}
          <div className="flex relative justify-center items-end  lg:mt-0">
            <img src={girlWithHat} alt="Traveler" className="w-[319px] h-[308px]
    lg:w-[705px] lg:h-[681px]
    object-contain
    mx-auto" />
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-2xl px-6 pt-6 pb-4 shadow-md border border-gray-200 order-2 lg:order-1">
          <form onSubmit={handleSubmit}  className="flex flex-col gap-4">

            <input type="text" name="name" placeholder="Name *" onChange={handleInputChange} className="px-4 py-3 rounded-lg outline-none bg-gray-100 text-gray-800 placeholder-gray-500" required />
            <input type="email" name="email" placeholder="Email *" onChange={handleInputChange} className="px-4 py-3 rounded-lg outline-none bg-gray-100 text-gray-800 placeholder-gray-500" required />
            <input type="text" name="mobile" placeholder="Mobile *" onChange={handleInputChange} className="px-4 py-3 rounded-lg outline-none bg-gray-100 text-gray-800 placeholder-gray-500" required />
            <textarea name="message" placeholder="Message" className="px-4 py-3 h-56 rounded-lg outline-none bg-gray-100 text-gray-800 placeholder-gray-500 resize-none" />

            <div className="flex gap-3 mt-4">
             <button type="submit" disabled={!isFormValid || status.submitting} className="bg-indigo-900 text-white px-6 py-2 rounded-lg text-sm disabled:bg-gray-400 disabled:cursor-not-allowed">
               {status.submitting ? "Sending..." : "Send Inquiry"}
             </button>
             <button type="button" onClick={() => {
               const currentPath = window.location.pathname;
               if (currentPath.includes('/about')) {
                 window.location.href = '/';
               } 
                 const section = document.getElementById('destinations');
                 section?.scrollIntoView({ behavior: 'smooth' });
               
             }} className="bg-white border px-6 py-2 rounded-lg text-sm">
               Explore Destinations
             </button>
            </div>
          </form>
        </div>
       </div>
    </section>
     );
};

export default Inquiryform;
