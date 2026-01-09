import { useState , useEffect} from "react";


const FormHomePage = () => {
   const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });
    const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: "" }
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
            disabled={!isFormValid || status.submitting}
            className="bg-indigo-900 hover:bg-indigo-700 px-3 py-2 sm:px-6 sm:py-3 rounded-lg text-[10px] xs:text-[11px] sm:text-sm whitespace-nowrap text-white flex items-center justify-center"
          >
            {status.submitting ? "Sending..." : "Send Inquiry"}
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
