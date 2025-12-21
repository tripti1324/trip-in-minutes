import { useState } from "react";
import { girlWithHat } from "../../assets"

const Inquiryform = () => {
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const isFormValid = formData.name.trim() && formData.email.trim() && formData.mobile.trim();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const form = new FormData(e.currentTarget);
          const name = form.get('name') as string;
          const email = form.get('email') as string;
          const mobile = form.get('mobile') as string;
          const message = form.get('message') as string;
          
          const text = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`;
          const whatsappUrl = `https://wa.me/917411605384?text=${encodeURIComponent(text)}`;
          window.open(whatsappUrl, '_blank');
       };

  return (
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-20 ">
        {/* FORM */}
        <div className="bg-white rounded-2xl px-6 pt-6 pb-4 shadow-md border border-gray-200">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" name="name" placeholder="Name *" onChange={handleInputChange} className="px-4 py-3 rounded-lg outline-none bg-gray-100 text-gray-800 placeholder-gray-500" required />
            <input type="email" name="email" placeholder="Email *" onChange={handleInputChange} className="px-4 py-3 rounded-lg outline-none bg-gray-100 text-gray-800 placeholder-gray-500" required />
            <input type="text" name="mobile" placeholder="Mobile *" onChange={handleInputChange} className="px-4 py-3 rounded-lg outline-none bg-gray-100 text-gray-800 placeholder-gray-500" required />
            <textarea name="message" placeholder="Message" className="px-4 py-3 h-56 rounded-lg outline-none bg-gray-100 text-gray-800 placeholder-gray-500 resize-none" />

            <div className="flex gap-3 mt-4">
             <button type="submit" disabled={!isFormValid} className="bg-indigo-900 text-white px-6 py-2 rounded-lg text-sm disabled:bg-gray-400 disabled:cursor-not-allowed">
               Send Inquiry
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

       {/* IMAGE */}
        <div className="flex relative justify-center items-end mt-10 lg:mt-0">
          <img src={girlWithHat} alt="Traveler" className="max-h-[280px] sm:max-h-[380px] lg:max-h-[820px] mx-auto lg:-ml-20" />
        </div>
       </div>
     );
};

export default Inquiryform;
