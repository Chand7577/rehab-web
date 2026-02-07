import { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Reusable HealingCard component – used 4-5 times with varying layouts
function HealingCard({ titleEn, titleHi, descEn, descHi, imageUrl, reverse = false, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  // Mouse tracking for beam of light (spotlight effect)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Flip variants – rotates on Y axis when in view (scroll trigger)
  const flipVariants = {
    hidden: { rotateY: reverse ? -90 : 90, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={flipVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`relative flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-12 p-8 md:p-12 rounded-3xl bg-gray-900/80 backdrop-blur-xl shadow-2xl border border-purple-500/30 overflow-hidden transform-gpu mb-12 lg:mb-16`}
      style={{
        perspective: "1600px",
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight beam – radial gradient follows mouse */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.15), transparent)`,
            transition: "background-position 0.1s ease-out",
          }}
        />
      )}

      {/* Image side – 3D lift on hover */}
      <motion.div
        className="relative w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
        whileHover={{ scale: 1.05, rotateX: 5, rotateY: reverse ? -5 : 5 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <img
          src={imageUrl || "/placeholder-healing.jpg"}
          alt={titleEn}
          className="w-full h-full object-cover"
        />
        {/* Subtle glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-amber-500/10 opacity-50" />
      </motion.div>

      {/* Content side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-gray-100">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 drop-shadow-lg">
          {titleEn}
          <br />
          <span className="text-amber-300 text-xl md:text-2xl lg:text-3xl font-semibold">
            {titleHi || ''}
          </span>
        </h3>

        <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-200">
          <p>{descEn}</p>
          <p className="font-medium">{descHi}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Parent Section – wraps multiple HealingCards with healing background
export default function Feature2({ isVisible = true }) {
  // Example data – replace with your actual 4-5 items
  const stories = [
    {
      titleEn: "Story of Renewal",
      titleHi: "नवीनीकरण की कहानी",
      descEn: "A journey from darkness to light, embracing new beginnings with expert care.",
      descHi: "अंधेरे से प्रकाश की ओर एक यात्रा, विशेषज्ञ देखभाल के साथ नए शुरुआत को अपनाते हुए।",
      imageUrl: "/images/renewal.jpg",
      reverse: false,
    },
    {
      titleEn: "Path to Wellness",
      titleHi: "स्वास्थ्य की राह",
      descEn: "Overcoming challenges with personalized support and family involvement.",
      descHi: "व्यक्तिगत समर्थन और परिवार की भागीदारी के साथ चुनौतियों पर विजय प्राप्त करना।",
      imageUrl: "/images/wellness.jpg",
      reverse: true,
    },
    {
      titleEn: "Healing Together",
      titleHi: "साथ में ठीक होना",
      descEn: "Family-centered recovery programs that build stronger bonds.",
      descHi: "परिवार-केंद्रित रिकवरी कार्यक्रम जो मजबूत बंधन बनाते हैं।",
      imageUrl: "/images/family.jpg",
      reverse: false,
    },
    {
      titleEn: "Empowered Recovery",
      titleHi: "सशक्त रिकवरी",
      descEn: "Tools and guidance for long-term mental and physical health.",
      descHi: "लंबे समय के मानसिक और शारीरिक स्वास्थ्य के लिए उपकरण और मार्गदर्शन।",
      imageUrl: "/images/empower.jpg",
      reverse: true,
    },
    {
      titleEn: "Hope Restored",
      titleHi: "आशा बहाल",
      descEn: "Real stories of transformation and renewed purpose.",
      descHi: "परिवर्तन और नवीनीकृत उद्देश्य की वास्तविक कहानियाँ।",
      imageUrl: "/images/hope.jpg",
      reverse: false,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-amber-900/40">
      {/* Background healing elements – same as before */}
      <div className="healing-bg absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="petal absolute rounded-full bg-gradient-to-br from-pink-300/20 via-purple-200/30 to-white/10 backdrop-blur-md border border-purple-300/20 shadow-[0_0_25px_rgba(255,255,255,0.18)]"
            style={{
              width: `${Math.random() * 70 + 25}px`,
              height: `${Math.random() * 70 + 25}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 130 + 40}%`,
              animation: `floatHealing ${Math.random() * 25 + 18}s linear infinite`,
              animationDelay: `-${Math.random() * 20}s`,
              opacity: Math.random() * 0.35 + 0.25,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}

        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`ray-${i}`}
            className="ray absolute bottom-0 left-1/2 w-px h-3/4 bg-gradient-to-t from-transparent via-amber-300/30 to-transparent opacity-40"
            style={{
              left: `${15 + i * 14}%`,
              transform: `rotate(${Math.random() * 24 - 12}deg)`,
              animation: `riseRay ${Math.random() * 35 + 22}s linear infinite`,
              animationDelay: `-${Math.random() * 18}s`,
            }}
          />
        ))}
      </div>

      {/* Main content – stack of cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {isVisible && stories.map((story, index) => (
          <HealingCard
            key={index}
            {...story}
            index={index}
            reverse={index % 2 === 1} // Alternate layout for variety
          />
        ))}
      </div>

      {/* Keyframes – same as previous */}
      <style jsx global>{`
        @keyframes floatHealing {
          0% { transform: translateY(0) translateX(0) scale(1) rotate(0deg); }
          100% { transform: translateY(-180vh) translateX(${Math.random() > 0.5 ? '50vw' : '-50vw'}) scale(0.4) rotate(720deg); }
        }

        @keyframes riseRay {
          0% { transform: translateY(100%) scaleY(0.2); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100%) scaleY(1.2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
