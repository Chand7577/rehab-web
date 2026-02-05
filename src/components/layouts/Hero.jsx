
import { useState, useEffect } from 'react';
import Image1 from "../../assets/image-1.jpeg";
import Image2 from "../../assets/image-2.jpeg";
import Image3 from "../../assets/image-3.jpeg";
import Image4 from "../../assets/image-4.jpeg";
const slides = [
  {
    image:Image1,
    title: 'Explore The World',
    subtitle: 'Discover places you\'ve only dreamed about',
  },
  {
    image: Image2,
    title: 'Feel The Breeze',
    subtitle: 'Where the sky meets the sea',
  },
  {
    image:Image3,
    title: 'Live The Night',
    subtitle: 'Cities that never sleep',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Optional: auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[80vh] overflow-hidden bg-gray-900">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover brightness-75"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-2xl leading-tight">
                  {slide.title}
                </h1>
                <p className="mt-5 md:mt-8 text-lg md:text-2xl text-gray-200 font-light">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 
                 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center 
                 rounded-full bg-black/40 text-white hover:bg-black/70 
                 transition-all duration-300 backdrop-blur-sm shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 
                 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center 
                 rounded-full bg-black/40 text-white hover:bg-black/70 
                 transition-all duration-300 backdrop-blur-sm shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-white scale-125 shadow-md'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}