import { useState } from "react";
import { Link } from "react-router-dom";

const ThreeLine = () => {
  const [open, setOpen] = useState(false);

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
          <nav className="flex flex-col items-end justify-center gap-2 text-lg font-medium pr-8">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
            <Link to="/destinations" onClick={() => setOpen(false)}>Destinations</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
            <Link to="/privacy-policy" onClick={() => setOpen(false)}>Privacy Policy</Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default ThreeLine;
