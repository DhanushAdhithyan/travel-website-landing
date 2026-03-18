import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-6 md:px-16 py-10 md:py-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-0">

      {/*LEFT*/}
      <div className="flex-1 text-center md:text-left">
        <p className="text-orange-500 font-semibold mb-4 text-sm tracking-wide font-volkhov">
          BEST DESTINATIONS AROUND THE WORLD
        </p>

        <h1 className="font-volkhov text-[#14213d] text-[42px] sm:text-[56px] md:text-[68px] lg:text-[76px] leading-tight mb-6">
          Travel,{" "}
          <span className="relative inline-block">
            enjoy
            <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-400 -z-10 rounded-sm" />
          </span>
          <br />
          and live a new
          <br />
          and full life
        </h1>

        <p className="text-gray-500 mb-8 max-w-md mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        <div className="flex items-center justify-center md:justify-start gap-6 flex-wrap">
          <button className="bg-[#F1A26E] hover:bg-orange-400 transition-colors duration-200 text-white px-7 py-3 rounded-xl shadow-lg text-sm font-semibold">
            Find out more
          </button>

          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-orange-400 group-hover:bg-orange-500 transition-colors duration-200 rounded-full flex items-center justify-center text-white shadow-md">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="white">
                <path d="M1 1l10 6-10 6V1z" />
              </svg>
            </div>
            <span className="text-gray-600 text-sm font-medium">Play Demo</span>
          </div>
        </div>
      </div>

      {/*RIGHT*/}
      <div className="flex-1 relative flex justify-center items-center mt-6 md:mt-0">
        <Image
          src="/assets/hero-image.webp"
          alt="Traveler"
          width={500}
          height={500}
          className="mx-auto w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] h-auto"
          priority
        />
      </div>

      {/* Plane */}
      <Image
        src="/assets/plane.webp"
        alt=""
        aria-hidden="true"
        width={80}
        height={80}
        className="absolute top-16 right-6 md:right-16 w-12 md:w-16 lg:w-20 h-auto hidden sm:block"
      />

      <Image
        src="/assets/plane.webp"
        alt=""
        aria-hidden="true"
        width={80}
        height={80}
        className="absolute top-16 right-36 md:right-64 lg:right-96 w-10 md:w-14 h-auto hidden sm:block"
      />
    </section>
  );
}