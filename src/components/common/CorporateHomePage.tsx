import { Mice } from "../../assets";

const CorporateHomePage = () => {
  return (
    <section id="corporate" className="w-full bg-white lg:py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING WRAPPER */}
        <div className="relative md:grid md:grid-cols-[1fr_auto] md:items-start md:gap-6">
          {/* MOBILE BG IMAGE (RIGHT SIDE ONLY) */}
          <div
            className="
              absolute 
              -right-10 top-0
              h-[125%]
              w-[72%]
              bg-no-repeat bg-cover
              bg-right
              md:hidden
              z-0
            "
            style={{ backgroundImage: `url(${Mice})` }}
          />

          {/* HEADING */}
          <div className="md:max-w-[695px]">
            <h2
              className="relative z-10
                text-[24px]        // ← MOBILE 24px
                md:text-[40px]     // ← LAPTOP 40px
                font-bold
                leading-[1.1]
                px-6 md:px-0
                mb-2"
            >
              <span className="md:hidden">Corporate,</span>
              <span className="hidden md:inline mb-0">
                Corporate, Travel, Simplified
              </span>
              <br className="md:hidden" />
              <span className="md:hidden">Travel,</span>
              <br className="md:hidden" />
              <span className="md:hidden">Simplified</span>
            </h2>
          </div>
        </div>

        <div className="relative mt-6 md:mt-2 md:grid md:grid-cols-[1fr_1fr] md:gap-12 md:items-start">
          {/* PARAGRAPH */}
          <div>
            <p
              className="relative z-10 text-black
                text-[12px]        // ← MOBILE 12px
                md:text-[30px]     // ← LAPTOP 30px
                leading-[1.7]
                max-w-[560px]
                px-6 md:px-0
                md:mt-1 mb-2"
            >
              From business trips and team movements to events and incentive
              tours — our Corporate Travel Solutions offer smooth coordination,
              smart planning, and reliable support for every level of corporate
              travel. We streamline the entire experience so your teams can move
              confidently, efficiently, and without disruptions.
            </p>
          </div>

          {/* DESKTOP IMAGE – PARALLEL TO PARAGRAPH */}
          <div className="hidden md:flex justify-end md:-mt-6">
            <img
              src={Mice}
              alt="Corporate Travel Illustration"
              className="w-[841px] h-[432px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateHomePage;
