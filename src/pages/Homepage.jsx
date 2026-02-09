import React, { useState, useEffect } from "react";

const SLIDES = [
  {
    img: "/assets/img-3.jpeg",
    heading: "Environmental Excellence",
    para: "Sustainable solutions for a better tomorrow.",
  },
  {
    img: "/assets/img-1.jpeg",
    heading: "Trusted Consulting",
    para: "Expert guidance for your environmental goals.",
  },
  {
    img: "/assets/img-8.jpg",
    heading: "NAABET Accredited",
    para: "Quality and compliance you can rely on.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.img})` }}
          />
          <div className="absolute inset-0 bg-stone-900/50" />
          <div className="relative z-10 flex h-full flex-col items-center top-50 justify-center px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 max-w-4xl text-3xl tracking-tight text-white drop-shadow-md sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
              {slide.heading}
            </h1>
            <p className="max-w-2xl text-base text-white/95 drop-shadow sm:text-lg md:text-xl">
              {slide.para}
            </p>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className="h-2 w-2 rounded-full transition-all sm:h-2.5 sm:w-2.5"
            style={{
              backgroundColor:
                i === current ? "white" : "rgba(255,255,255,0.4)",
              transform: i === current ? "scale(1.25)" : "scale(1)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
