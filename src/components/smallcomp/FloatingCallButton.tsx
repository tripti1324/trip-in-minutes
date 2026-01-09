import React from "react";

const FloatingCallButton: React.FC = () => {
  return (
    <>
      {/* Floating round call button (Desktop + Mobile) */}
      <a
        href="tel:+917411605384"
        aria-label="Call Now"
        className="
          fixed
          right-5
          bottom-24
          z-[9999]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-green-500
          text-2xl
          text-white
          shadow-lg
          transition
          hover:scale-110
          hover:bg-green-600
        "
      >
        📞
      </a>

     
    </>
  );
};

export default FloatingCallButton;
