import { Mice } from "../../assets";
const Corporate = () => {
  return (
    
<section id="corporate" className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Corporate Travel, Simplified</h2>

          <p className="text-black-700 mb-7 leading-relaxed">
            From business trips and team movements to events and incentive tours —
             our Corporate Travel Solutions offer smooth coordination, 
             smart planning, and reliable support for every level of corporate travel.
              We streamline the entire experience so your teams can move confidently, 
              efficiently, and without disruptions.
          </p>
        </div>

        {/* RIGHT IMAGE + BADGES */}
        <div className="relative flex justify-center">
          <img
            src={Mice}
            alt="About Trip In Minutes"
            className="w-300 sm:w-200 md:w-[920px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Corporate;

