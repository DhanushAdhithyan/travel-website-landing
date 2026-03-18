import Image from "next/image";

export default function BookTrip() {
  return (
    <section className="px-6 md:px-16 mx-auto py-10 md:py-24 flex flex-col md:flex-row items-center gap-16 md:container lg:max-w-7xl">
      <div className="flex-1 justify-center">
        <p className="text-sm text-gray-400 mb-2">Easy and Fast</p>

        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-10 font-volkhov">
          Book Your Next Trip <br /> In 3 Easy Steps
        </h2>

        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-yellowBtn rounded-lg flex items-center justify-center text-white">
              <img src="/assets/booktrip/Group 7.webp" alt="Destination" />
            </div>
            <div>
              <h4 className="font-semibold text-primary">Choose Destination</h4>
              <p className="text-textGray text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white">
              <img src="/assets/booktrip/Group 12.webp" alt="Destination" />
            </div>
            <div>
              <h4 className="font-semibold text-primary">Make Payment</h4>
              <p className="text-textGray text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white">
              <img src="/assets/booktrip/Group 11.webp" alt="Destination" />
            </div>
            <div>
              <h4 className="font-semibold text-primary">
                Reach Airport on Selected Date
              </h4>
              <p className="text-textGray text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="absolute top-6 right-6 grid grid-cols-6 gap-[10px] pointer-events-none select-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{
                background:
                  i === 0 ? "#E8604C" : i === 13 ? "#6C63FF" : "#D1D5DB",
              }}
            />
          ))}
        </div>
        <div className="absolute top-0 right-10 w-[200px] h-[200px] bg-blue-500 opacity-40 blur-3xl rounded-full -z-10"></div>

        <div className="bg-white rounded-[24px] shadow-xl p-5 w-[320px] mx-auto">
          <Image
            src="/assets/booktrip/Rectangle 17.webp"
            alt="trip"
            width={300}
            height={200}
            className="rounded-xl mb-4"
          />

          <h4 className="font-semibold text-primary mb-1">Trip To Greece</h4>

          <p className="text-sm text-textGray mb-4">14-29 June | by Robbin</p>

          <div className="flex gap-4 mb-4 text-gray-400">
            <span>
              <img src="/assets/booktrip/LEAF.png" />
            </span>
            <span>
              <img src="/assets/booktrip/map icon.png" />
            </span>
            <span>
              <img src="/assets/booktrip/send.png" />
            </span>
          </div>

          <div className="flex flex-row items-center justify-between text-sm text-textGray">
            <p className="flex flex-row gap-2">
              <img src="assets/booktrip/building 1.png" />
              24 people going
            </p>
            <span>
              <img src="assets/booktrip/Group.png" className="w-5 h-5 p-1" />
            </span>
          </div>
        </div>

        {/* Floating Small Card */}
        <div className="absolute bottom-10 right-0 bg-white shadow-lg rounded-xl p-4 w-[200px] flex flex-row">
          <div>
            <img src="/assets/booktrip/Mask Group.png" />
          </div>
          <div>
            <p className="text-xs text-gray-400">Ongoing</p>
            <h5 className="text-sm font-medium text-primary">Trip to rome</h5>

            <p className="text-xs text-textGray mb-2">40% completed</p>

            <div className="w-full h-1 bg-gray-200 rounded">
              <div className="w-[40%] h-1 bg-blue-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
