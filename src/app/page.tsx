"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? "bg-orange-700 shadow-lg" : "bg-transparent"}`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-3xl font-bold text-white">
            Bricxmen
          </a>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="text-white hover:text-orange-200">
              Home
            </a>
            <a href="#services" className="text-white hover:text-orange-200">
              Services
            </a>
            <a href="#gallery" className="text-white hover:text-orange-200">
              Gallery
            </a>
            <a href="#contact" className="text-white hover:text-orange-200">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

const WaveAnimation = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden">
    <svg
      className="relative block w-full h-[100px]"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className="fill-orange-700"
      ></path>
    </svg>
  </div>
);

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="min-h-screen flex flex-col justify-center items-center py-20"
  >
    <h2 className="text-4xl font-bold mb-8 text-orange-700">{title}</h2>
    {children}
  </section>
);

const Home = () => (
  <Section id="home" title="Welcome to Bricxmen">
    <p className="text-xl text-center max-w-2xl">
      Chicago's premier masonry experts, building dreams one brick at a time.
    </p>
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="mt-8"
    >
      <ChevronDoubleDownIcon className="h-8 w-8 text-orange-700" />
    </motion.div>
  </Section>
);

const Services = () => (
  <Section id="services" title="Our Services">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        "Brick Laying",
        "Stone Masonry",
        "Chimney Repair",
        "Tuckpointing",
        "Concrete Work",
        "Restoration",
      ].map((service) => (
        <div key={service} className="bg-orange-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-orange-700">
            {service}
          </h3>
          <p className="text-gray-700">
            Professional {service.toLowerCase()} services for residential and
            commercial properties.
          </p>
        </div>
      ))}
    </div>
  </Section>
);

const Gallery = () => (
  <Section id="gallery" title="Our Work">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="bg-orange-200 h-64 rounded-lg shadow-md overflow-hidden"
        >
          <div className="w-full h-full bg-orange-300 flex items-center justify-center text-white text-2xl font-bold">
            Image {i}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" title="Contact Us">
    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            rows={5}
            placeholder="Message"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Send Message
        </button>
      </div>
    </form>
  </Section>
);

const Footer = () => (
  <footer className="bg-orange-800 text-white py-8">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Bricxmen</h3>
          <p>Building Chicago, brick by brick</p>
        </div>
        <div>
          <p>&copy; 2023 Bricxmen. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default function Page() {
  return (
    <div className="bg-orange-50 text-gray-800 min-h-screen">
      <Header />
      <main>
        <Home />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WaveAnimation />
    </div>
  );
}
