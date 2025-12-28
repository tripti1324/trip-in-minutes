import { useState , useEffect} from "react";


const FormHomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.mobile.trim();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const mobile = form.get("mobile") as string;
    const message = form.get("message") as string;

    const text = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/917411605384?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="bg-transparent backdrop-transparent-sm
  p-4 sm:p-6
  rounded-2xl
  w-full max-w-[259px]
sm:max-w-none
lg:w-[420px]
mx-auto
  -mt-2 sm:mt-0 "
    >
      <form className="flex flex-col gap-1 sm:gap-2" onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="h-[29px] sm:h-[50px] w-full sm:w-[448px]
px-4 py-2 sm:py-3
rounded-lg bg-transparent border border-white/40
text-white text-[8px] sm:text-[15px] placeholder-white/70 focus:outline-none"
          placeholder="Name"
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="h-[29px] sm:h-[50px] w-full sm:w-[448px]
px-4 py-2 sm:py-3
rounded-lg bg-transparent border border-white/40
text-white text-[8px] sm:text-[15px] placeholder-white/70 focus:outline-none"
          placeholder="Email"
        />

        <input
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
          className="h-[29px] sm:h-[50px] w-full sm:w-[448px]
px-4 py-2 sm:py-3
rounded-lg bg-transparent border border-white/40
text-white text-[8px] sm:text-[15px] placeholder-white/70 focus:outline-none"
          placeholder="Mobile"
        />

        <textarea
          name="message"
          rows={5}
          onChange={handleInputChange}
          className="h-[106px] sm:h-[184px] w-full sm:w-[448px]
px-4 py-2 sm:py-3
rounded-lg bg-transparent border border-white/40
text-white text-[8px] sm:text-[15px]  placeholder-white/70 focus:outline-none"
          placeholder="Message"
        />

        <div className="flex justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 flex-nowrap">
          <button
            type="submit"
            disabled={!isFormValid}
            className="bg-indigo-900 hover:bg-indigo-700 px-3 py-2 sm:px-6 sm:py-3 rounded-lg text-[10px] xs:text-[11px] sm:text-sm whitespace-nowrap text-white flex items-center justify-center"
          >
            Send Inquiry
          </button>

          <button
            type="button"
            onClick={() => {
              const section = document.getElementById("destinations");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white/90 text-black hover:bg-slate-400 px-3 py-2 sm:px-6 sm:py-3 min-w-[110px] sm:min-w-[200px] rounded-lg text-[10px] xs:text-[11px] sm:text-sm whitespace-nowrap font-semibold text-center"
          >
            Explore Destinations
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormHomePage;
