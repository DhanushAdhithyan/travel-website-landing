import Destinations from "@/components/Destinations";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import BookTrip from "@/sections/BookTrip";
import BrandsSubscribeSection from "@/sections/BrandsSubscribeSection";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="relative overflow-hidden">
        <Image
          src="/assets/Decore.webp"
          alt="background shape"
          width={800}
          height={800}
          className="absolute top-0 right-0 z-0 w-[50%] max-w-none"
        />

        {/* MAIN LAYOUT */}
        <div className="relative z-10">
          <Navbar />

          <section id="hero">
            <Hero />
          </section>

          <section id="flights">
            <Services />
          </section>

          <section id="destinations">
            <Destinations />
          </section>

          <section id="bookings">
            <BookTrip />
          </section>

          <section id="hotels">
            <Testimonials />
          </section>

          <BrandsSubscribeSection />

          <Footer />
        </div>
      </main>
    </>
  );
}