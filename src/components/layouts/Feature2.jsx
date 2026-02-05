import { useState } from 'react';
import { cards } from "../../utils/helper";

export default function Feature2() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Upper heading + paragraphs */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why Families Choose <span className="text-indigo-600">MagicNurf</span>
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              At MagicNurf, we believe recovery is a journey best taken with understanding, compassion, and expert guidance. Our programs are designed to heal not just the individual, but the entire family system.
            </p>

            <p className="font-medium">
              मैजिकनर्फ में हम मानते हैं कि रिकवरी एक ऐसी यात्रा है जो समझ, करुणा और विशेषज्ञ मार्गदर्शन के साथ सबसे अच्छी तरह पूरी होती है। हमारे कार्यक्रम केवल व्यक्ति को ही नहीं, बल्कि पूरे परिवार को ठीक करने के लिए डिज़ाइन किए गए हैं।
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <CardItem key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Individual Card Component ──
function CardItem({ card }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Decide where to cut the text (you can adjust these numbers)
  const enPreviewLength = 80;   // characters
  const hiPreviewLength  = 70;

  const enShort = card.descEn.length > enPreviewLength
    ? card.descEn.substring(0, enPreviewLength).replace(/[\s.]+$/, '') + '…'
    : card.descEn;

  const hiShort = card.descHi.length > hiPreviewLength
    ? card.descHi.substring(0, hiPreviewLength).replace(/[\s.]+$/, '') + '…'
    : card.descHi;

  const needsReadMore = card.descEn.length > enPreviewLength || card.descHi.length > hiPreviewLength;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Video area */}
      <div className="aspect-video bg-gray-900 relative">
        {card.videoUrl ? (
          // For local video files use <video> tag instead of iframe
          <video
            src={card.videoUrl}
            controls
            className="absolute inset-0 w-full h-full object-cover"
            poster="/path/to/poster-if-needed.jpg" // optional
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            Video Placeholder
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
          {card.titleEn}
          <br />
          <span className="text-indigo-600 text-lg md:text-xl font-semibold">
            {card.titleHi || ''} {/* fallback if titleHi missing */}
          </span>
        </h3>

        {/* Description area */}
        <div className="text-gray-600 leading-relaxed mb-5 flex-grow">
          {/* English */}
          <p>
            {isExpanded ? card.descEn : enShort}
          </p>

          {/* Hindi */}
          <p className="mt-4 font-medium">
            {isExpanded ? card.descHi : hiShort}
          </p>
        </div>

        {/* Read More / Show Less button */}
        {needsReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-auto self-start inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
          >
            {isExpanded ? 'Show Less ▲' : 'Read More ▼'}
          </button>
        )}
      </div>
    </div>
  );
}