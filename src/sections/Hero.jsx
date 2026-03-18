import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-6 md:px-16 py-10 md:py-20 flex flex-col md:flex-row items-center">
      <div className="flex-1">
        <p className="text-orange-500 font-semibold mb-4 text-sm tracking-wide">
          BEST DESTINATIONS AROUND THE WORLD
        </p>

        <h1 className="font-volkhov text-primary text-[48px] md:text-[72px] leading-tight mb-6 left-20">
          Travel,{" "}
          <span className="relative">
            enjoy
            <span className="absolute left-0 bottom-2 w-full h-2 bg-accent -z-10"></span>
          </span>
          <br />
          and live a new <br />
          and full life
        </h1>

        <p className="text-gray-500 mb-8 max-w-md">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-6">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg">
            Find out more
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white">
              ▶
            </div>
            <span className="text-gray-600">Play Demo</span>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-1 mt-10 md:mt-0 relative">
        <Image
          src="/assets/hero-image.webp"
          alt="Traveler"
          width={500}
          height={500}
          className="mx-auto"
        />
      </div>
      <Image
        src="/assets/plane.webp"
        alt="plane"
        width={80}
        height={80}
        className="absolute top-20 right-40"
      />
      <Image
        src="/assets/plane.webp"
        alt="plane"
        width={80}
        height={80}
        className="absolute top-20 right-120"
      />
    </section>
  );
}
