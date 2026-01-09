import { timAboutUsImg } from "../../assets";

const HomeAboutPage = () => {
  return (
    <section id="about" className="w-full bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold mb-3 md:mb-6 text-center md:text-left">
            ABOUT US
          </h2>

          <p className="text-black mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-lg leading-relaxed text-center md:text-left max-w-lg mx-auto md:max-w-none">
            Trip in Minutes is a modern travel service built to make planning
            effortless and joyful. We combine smart coordination, curated
            experiences and warm, personalised support to design journeys that
            match your style whether you're exploring solo, creating travel
            content, enjoying time with family and friends, or travelling for
            business.
          </p>

          <p className="text-black mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-lg leading-relaxed text-center md:text-left max-w-lg mx-auto md:max-w-none hidden lg:block">
            Our approach is simple: quick coordination, seamless planning,
            warm guidance, and beautifully curated travel experiences.
          </p>

          <p className="text-black mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-lg leading-relaxed text-center md:text-left max-w-lg mx-auto md:max-w-none hidden lg:block">
            From flights and stays to full-scale travel design, we bring
            together technology, insight, and passion to make your journeys
            smoother, smarter, and more meaningful.
          </p>

          <p className="text-black mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-lg leading-relaxed text-center md:text-left max-w-md mx-auto md:max-w-none lg:hidden">
            Our focus is on clarity, quality and thoughtful execution. We
            provide fast, reliable support where it matters, and careful
            curation where it counts — all to ensure your travel moments are
            meaningful and stress-free.
          </p>
        </div>

        {/* RIGHT IMAGE + BADGES */}
        <div className="relative flex justify-center">
          <img
            src={timAboutUsImg}
            alt="About Trip In Minutes"
            className="w-72 sm:w-96 md:w-[420px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAboutPage;
