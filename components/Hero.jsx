"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const images = ["/home-kit.jpeg", "/away-kit.jpeg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${img}')`,
              transform: i === index ? "scale(1.1)" : "scale(1)",
              transition: "transform 5s ease-in-out, opacity 1s ease-in-out",
            }}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
          Spin Kenya
        </h1>

        <p className="text-lg md:text-6xl mb-6">
          Stronger Playing in Numbers
        </p>
      </div>
    </section>
  );
}