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

  const [status, setStatus] = useState({
  submitted: false,
  submitting: false,
  info: { error: false, msg: "" },
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

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setStatus((prev) => ({ ...prev, submitting: true }));

  const payload = {
    name: formData.name,
    email: formData.email,
    mobile: formData.mobile,
    services: formData.services.length
      ? formData.services.join(", ")
      : "Not Selected",
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

      setFormData({
        name: "",
        email: "",
        mobile: "",
        services: [],
      });

      setTimeout(onClose, 1500);
    } else {
      throw new Error(data.message || "Submission failed");
    }
  } catch (error) {
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: true, msg: "Something went wrong. Try again." },
    });
  }
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
          className="absolute top-1.5 sm:top-4 right-4 text-3xl text-gray-500"
        >
          ×
        </button>


          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 sm:p-12">
   <div className="flex flex-col gap-1">
  

  <MultiSelect
  selectedItemsLabel="{0} services selected"
    value={formData.services}
    options={serviceOptions}
    onChange={(e) =>
      setFormData((prev) => ({ ...prev, services: e.value }))
    }
    placeholder="Select Services "
    display="chip"
    maxSelectedLabels={5}
     showSelectAll
  selectAllLabel="Select All Services"
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
            <textarea
              name="message"
              placeholder="Message"
              onChange={handleInputChange}
                rows={5}
              className="px-4 py-3 bg-gray-100 rounded-lg"
            />

            <button
              type="submit"
              disabled={!isFormValid || status.submitting}
              className="bg-indigo-900 text-white py-2 rounded-lg disabled:bg-gray-400"
            >
              {status.submitting ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
       
<style>
{`
  /* Lock row height completely */

  /* ===== FIX SELECT ALL ROW ALIGNMENT ===== */

/* Select All container */
/* ✅ SELECT ALL — always one line (desktop + mobile) */
.p-multiselect-header {
  display: flex !important;
  flex-direction: row !important;   /* 🔥 force horizontal */
  align-items: center !important;
  gap: 12px !important;              /* checkbox __gap__ text */
  min-height: 44px !important;
  padding: 8px 12px !important;
  white-space: nowrap !important;
}

.p-multiselect-header label {
  font-size: 14px;
  line-height: 1.4 !important;
  white-space: nowrap !important;
}


/* ✔ Make label readable & never clipped */


/* ✅ Show Select All checkbox */
.p-multiselect-header .p-checkbox {
  margin: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
}

/* FIX checkbox + label distance */
.p-multiselect-item {
  display: flex !important;
  align-items: center !important;
  padding: 0 12px !important;
}

.p-multiselect-item > div {
  display: flex !important;
  align-items: center !important;
  gap: 12px !important;        /* ✅ SMALL clean gap */
  width: auto !important;     /* ✅ DO NOT stretch */
}

/* prevent PrimeReact spacing push */
.p-multiselect-item label {
  margin: 0 !important;
  white-space: nowrap;
  margin-left: 10px !important;
}


  /* Prevent highlight state from changing layout */
 /* Lock item height permanently */
.p-multiselect-item,
.p-multiselect-item.p-highlight {
  height: 40px !important;
  min-height: 40px !important;
  padding: 0 12px !important;
  display: flex !important;
  align-items: center !important;
}


/* Selected chips stay in one line */
.p-multiselect-label-container {
  display: flex !important;
  flex-wrap: nowrap !important;   /* ✅ one line */
  overflow-x: auto !important;    /* scroll if needed */
}

/* Individual chip */
.p-multiselect-token {
  margin-right: 6px !important;   /* small spacing */
  display: inline-flex !important;
  align-items: center !important;
  gap: 4px !important;
  white-space: nowrap;
}


  /* Fix label jump */
  .p-multiselect-item label {
  font-size: 14px;
  cursor: pointer;
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
/* ✅ FORCE SPACE BETWEEN CHECKBOX AND TEXT (ALL DEVICES) */
.p-multiselect-item .p-checkbox {
  margin-right: 4px !important;
}


`}
</style>



      </div>
    </div>
  );
};

export default PopUpForm;
