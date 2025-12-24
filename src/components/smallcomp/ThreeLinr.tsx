import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const ThreeLine = () => {
  const [open, setOpen] = useState(false);
useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "auto";
}, [open]);
  return (
    <>
      {/* HAMBURGER ICON (MOBILE ONLY) */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden flex flex-col gap-1 "
      >
        <span className="w-6 h-[2px] bg-black"></span>
        <span className="w-6 h-[2px] bg-black"></span>
        <span className="w-6 h-[2px] bg-black"></span>
      </button>

      {/* FULL SCREEN MENU */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-end">
          {/* CLOSE BUTTON */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setOpen(false)}
              className="text-3xl font-light"
            >
              ×
            </button>
          </div>

          {/* LINKS */}
          <nav className="w-full flex flex-col gap-3 mt-10">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="mx-4 bg-indigo-900 text-white py-3 rounded-lg text-center"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="mx-4 bg-indigo-900 text-white py-3 rounded-lg text-center"
            >
              About Us
            </Link>

           <Link
  to="/#destinations"
  onClick={() => setOpen(false)}
  className="mx-4 bg-indigo-900 text-white py-3 rounded-lg text-center"
>
  Destinations
</Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mx-4 bg-indigo-900 text-white py-3 rounded-lg text-center"
            >
              Contact Us
            </Link>

            <Link
              to="/privacy-policy"
              onClick={() => setOpen(false)}
              className="mx-4 bg-indigo-900 text-white py-3 rounded-lg text-center"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default ThreeLine;
