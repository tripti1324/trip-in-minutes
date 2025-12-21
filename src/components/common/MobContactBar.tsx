const MobContactBar = () => {
  return (
    <div className="md:hidden w-full bg-[#1f2357] text-white">
      <div className="flex items-center justify-between px-3 py-[6px] text-[10px] leading-none">

        {/* Phone */}
        <div className="flex items-center gap-1 whitespace-nowrap">
          <span>📞</span>
          <span>+91 7411605384 / 9082291898</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-1 whitespace-nowrap">
          <span>✉️</span>
          <span>hello@tripinminutes.in</span>
        </div>

        {/* Follow Us */}
        <div className="flex items-center gap-1 whitespace-nowrap">
          <span>Follow Us:</span>
          <span>📘</span>
          <span>📸</span>
          <span>🔗</span>
        </div>

      </div>
    </div>
  );
};

export default MobContactBar;
