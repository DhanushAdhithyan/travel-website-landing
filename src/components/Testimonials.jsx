"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next.",
      img: "/assets/testimonials/Image.webp",
    },
    {
      name: "Chris Thomas",
      location: "CEO of Red Button",
      text: "Amazing service! Everything was smooth and well organized. Highly recommended.",
      img: "/assets/testimonials/Image.webp",
    },
    {
      name: "Sara Lee",
      location: "New York, USA",
      text: "A wonderful experience from start to finish. Will definitely book again.",
      img: "/assets/testimonials/Image.webp",
    },
  ];

  const [index, setIndex] = useState(0);

  // 🔥 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };
  return (
    <section className="px-6 md:px-16 py-10 md:py-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        {/* LEFT */}
        <div className="flex-1">
          <p className="text-sm text-gray-400 mb-2 font-volkhov">TESTIMONIALS</p>

          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-10 font-volkhov">
            What People Say <br /> About Us.
          </h2>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-primary" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 relative">
          {/* MAIN CARD */}
          <div className="bg-white shadow-xl rounded-[20px] p-6 relative z-10 transition-all duration-500">
            <Image
              src={testimonials[index].img}
              alt="user"
              width={50}
              height={50}
              className="rounded-full absolute -top-6 left-6"
            />

            <p className="text-textGray text-sm mb-4 mt-4">
              “{testimonials[index].text}”
            </p>

            <h4 className="font-semibold text-primary">
              {testimonials[index].name}
            </h4>

            <p className="text-xs text-gray-400">
              {testimonials[index].location}
            </p>
          </div>

          {/* STACKED PREVIEW CARD */}
          <div className="absolute top-10 left-10 w-full h-full bg-white rounded-[20px] shadow-md -z-10 opacity-70"></div>

          {/* 🔼🔽 SLIDER BUTTONS */}
          <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center"
            >
              ↑
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center"
            >
              ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
