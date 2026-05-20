import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Rooms from "@/components/sections/Rooms";
import Pool from "@/components/sections/Pool";
import Dining from "@/components/sections/Dining";
import Spa from "@/components/sections/Spa";
import Activities from "@/components/sections/Activities";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Timeline from "@/components/sections/Timeline";
import DroneShowcase from "@/components/sections/DroneShowcase";
import InteractiveTour from "@/components/sections/InteractiveTour";
import Booking from "@/components/sections/Booking";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <About />
        <Rooms />
        <Pool />
        <Dining />
        <Spa />
        <Activities />
        <Gallery />
        <Testimonials />
        <Timeline />
        <DroneShowcase />
        <InteractiveTour />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
