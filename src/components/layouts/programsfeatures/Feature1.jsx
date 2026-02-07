import { useState } from 'react';
import { motion } from "framer-motion";
// Assuming you have a 'programs' array similar to 'cards'
// Example structure: [{ titleEn, titleHi, descEn, descHi, videoUrl? }, ...]
// If not, replace 'programs' with your actual data array

const programs = [
  // Add your program cards here (same format as before)
  // Example:
  // { titleEn: "Individual Therapy", titleHi: "व्यक्तिगत चिकित्सा", descEn: "...", descHi: "..." },
  // ...
];

export default function Feature({ isVisible = true }) {
  const sectionVars = {
    initial: { filter:"blur(40px)"},
    animate: {
      filter:"none",
      transition: { duration: 0.5, ease: "linear" }
    }
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={sectionVars}
      className="relative min-h-screen h-screen flex items-center overflow-hidden bg-gradient-to-br from-red-950 via-pink-900 to-amber-900/40"
    >
      {/* Healing background: floating lotus petals + rising rays */}
      <div className="healing-bg absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating lotus-like petals / glowing orbs */}
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

        {/* Subtle rising light rays – symbolizing progress & hope */}
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

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        {/* Heading + intro */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Our Programs For Patients
            <br />
            <span className="text-amber-300">हमारे पुनर्वास कार्यक्रम</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-100 leading-relaxed drop-shadow">
            <p>
              हमारे पुनर्वास कार्यक्रम व्यक्तिगत देखभाल और समर्थन प्रदान करते हैं, जो मरीजों को उनके स्वस्थ जीवन की दिशा में मार्गदर्शन करते हैं। हम मानसिक और शारीरिक स्वास्थ्य को बेहतर बनाने पर ध्यान केंद्रित करते हैं।
            </p>
            <p className="font-medium">
              Our rehabilitation programs provide personalized care and support, helping patients on their journey to recovery. We focus on improving both mental and physical well-being for a healthier future.
            </p>
          </div>
        </div>

        {/* Programs cards grid */}
        {isVisible && programs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 perspective-[1400px]">
            {programs.map((program, index) => (
              <ProgramCard key={index} program={program} index={index} />
            ))}
          </div>
        )}
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes floatHealing {
          0% {
            transform: translateY(0) translateX(0) scale(1) rotate(0deg);
          }
          100% {
            transform: translateY(-180vh) translateX(${Math.random() > 0.5 ? '50vw' : '-50vw'}) scale(0.4) rotate(720deg);
          }
        }

        @keyframes riseRay {
          0% {
            transform: translateY(100%) scaleY(0.2);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100%) scaleY(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </motion.section>
  );
}

// ── Individual Program Card (same 3D tilt style) ──
function ProgramCard({ program, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const enPreview = 80;
  const hiPreview = 70;

  const enShort =
    program.descEn.length > enPreview
      ? program.descEn.substring(0, enPreview).replace(/[\s.]+$/, '') + '…'
      : program.descEn;

  const hiShort =
    program.descHi.length > hiPreview
      ? program.descHi.substring(0, hiPreview).replace(/[\s.]+$/, '') + '…'
      : program.descHi;

  const needsMore = program.descEn.length > enPreview || program.descHi.length > hiPreview;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setRotateX(((y - cy) / cy) * 15);
    setRotateY(-((x - cx) / cx) * 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: 0.1 * index, duration: 1, type: "spring", stiffness: 90 }}
      className="bg-gray-900/75 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden flex flex-col h-full transform-gpu"
      style={{ transformStyle: "preserve-3d", perspective: "1400px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative aspect-video bg-gradient-to-br from-gray-950 to-purple-950/50"
        animate={{ rotateX, rotateY, scale: 1.04 }}
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
      >
        {program.videoUrl ? (
          <video
            src={program.videoUrl}
            controls
            className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
            Program Video / Image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
      </motion.div>

      <div className="p-6 md:p-8 flex flex-col flex-grow text-gray-100">
        <h3 className="text-xl md:text-2xl font-bold mb-4 drop-shadow">
          {program.titleEn}
          <br />
          <span className="text-purple-300 text-lg md:text-xl font-semibold">
            {program.titleHi || ''}
          </span>
        </h3>

        <div className="leading-relaxed mb-6 flex-grow text-gray-200">
          <p>{isExpanded ? program.descEn : enShort}</p>
          <p className="mt-5 font-medium">{isExpanded ? program.descHi : hiShort}</p>
        </div>

        {needsMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-auto self-start inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded"
          >
            {isExpanded ? 'Show Less ▲' : 'Read More ▼'}
          </button>
        )}
      </div>
    </motion.div>
  );
}
