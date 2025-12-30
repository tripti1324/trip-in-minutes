import { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { useEffect } from "react";




const servicesList = [
  "Hotels",
  "Flights",
  "Packages",
  "Visa Services",
  "MICE",
  "Transportation",
];

const serviceOptions = servicesList.map((service) => ({
  label: service,
  value: service,
}));


interface PopUpFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const PopUpForm = ({ isOpen, onClose, defaultService }: PopUpFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    services: defaultService ? [defaultService] : [],
  });

  useEffect(() => {
  if (!isOpen) {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      services: [],
    });
  }
}, [isOpen]);


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

    const text = `Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
Services Interested In: ${
      formData.services.length ? formData.services.join(", ") : "Not Selected"
    }`;

    const whatsappUrl = `https://wa.me/917411605384?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-white w-[95%] max-w-2xl rounded-2xl shadow-xl max-h-[75vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-gray-500"
        >
          ×
        </button>


          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 sm:p-12">
   <div className="flex flex-col gap-1">
  

  <MultiSelect
    value={formData.services}
    options={serviceOptions}
    onChange={(e) =>
      setFormData((prev) => ({ ...prev, services: e.value }))
    }
    placeholder="Select Services "
    display="chip"
    maxSelectedLabels={5}
    className="w-full px-4 py-3 bg-gray-100 rounded-lg"
    panelClassName="max-h-40 bg-white"
  />
</div>


            <input
              name="name"
              placeholder="Name *"
              onChange={handleInputChange}
              required
              className="px-4 py-3 bg-gray-100 rounded-lg"
            />
            <input
              name="email"
              placeholder="Email *"
              onChange={handleInputChange}
              required
              className="px-4 py-3 bg-gray-100 rounded-lg"
            />
            <input
              name="mobile"
              placeholder="Mobile *"
              onChange={handleInputChange}
              required
              className="px-4 py-3 bg-gray-100 rounded-lg"
            />

            <button
              type="submit"
              disabled={!isFormValid}
              className="bg-indigo-900 text-white py-2 rounded-lg disabled:bg-gray-400"
            >
              Send Inquiry
            </button>
          </form>
       
<style>
{`
  /* Lock row height completely */
  .p-multiselect-item {
    height: 40px !important;
    display: flex !important;
    align-items: center !important;
    padding: 0 0.75rem !important;
    box-sizing: border-box;
  }

  /* Prevent highlight state from changing layout */
  .p-multiselect-item.p-highlight {
    height: 40px !important;
    padding: 0 0.75rem !important;
  }

  /* Fix checkbox + text alignment */
  .p-multiselect-item > div {
    display: flex !important;
    align-items: center !important;
    gap: 0.5rem;
  }

  /* Fix label jump */
  .p-multiselect-item label {
    margin: 0 !important;
    line-height: 1 !important;
    display: flex !important;
    align-items: center !important;
  }

  /* Remove checkbox margin shift */
  .p-multiselect-item input {
    margin: 0 !important;
  }

  /* ❌ Remove PrimeReact extra check icon */
  .p-multiselect-item .p-checkbox-icon {
    display: none !important;
  }

  /* Keep checkbox clean */
  .p-multiselect-item .p-checkbox {
    box-shadow: none !important;
  }
    /* Force white background everywhere when dropdown opens */
.p-multiselect,
.p-multiselect-panel,
.p-multiselect-items,
.p-multiselect-item {
  background-color: #ffffff !important;
}
/* Make MultiSelect input container greyish */
.p-multiselect {
  background-color: #f3f4f6 !important; /* Tailwind gray-100 */
  border-color: #d1d5db !important;     /* gray-300 */
}

/* Dropdown arrow button more grey */
.p-multiselect-trigger {
  background-color: #e5e7eb !important; /* gray-200 */
  color: #6b7280 !important;            /* gray-500 */
}

/* Arrow icon color */
.p-multiselect-trigger-icon {
  color: #6b7280 !important;
}
  .p-multiselect:hover {
  border-color: #9ca3af !important; /* gray-400 */
}


`}
</style>



      </div>
    </div>
  );
};

export default PopUpForm;
