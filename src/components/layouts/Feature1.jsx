export default function Feature1({
  obj: { heading, subHeading, para1, para2, imgSrc, btnRequired = true },
  reverse = false, // true → image on LEFT, text on RIGHT
}) {
  // Helper: render para2 (string → paragraph, array of strings → bullets, array of objects → numbered cards)
  const renderPara2 = () => {
    if (!para2) return null;

    // String → paragraph
    if (typeof para2 === "string") {
      return (
        <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
          {para2}
        </p>
      );
    }

    // Array handling
    if (Array.isArray(para2)) {
      // Bullet list (array of strings)
      if (para2.every((item) => typeof item === "string")) {
        return (
          <ul className="mt-7 space-y-5 text-lg text-gray-700">
            {para2.map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-2 block w-2.5 h-2.5 rounded-full bg-indigo-500 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        );
      }

      // Numbered / featured cards
      return (
        <div className="mt-10 space-y-8">
          {para2.map((item, idx) => {
            let number = null;
            let title = "";
            let desc = "";

            if (Array.isArray(item)) {
              [number, title, desc] = item;
            } else if (typeof item === "object" && item !== null) {
              number = item.number || item.id || `${idx + 1}`.padStart(2, "0");
              title = item.title || item.heading || "";
              desc = item.desc || item.description || item.text || "";
            }

            return (
              <div
                key={idx}
                className="group flex gap-5 md:gap-6 items-start transition-all duration-300 hover:translate-x-2"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {number || idx + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors">
                    {title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {reverse ? (
            <>
              {/* ── REVERSED LAYOUT ── Image LEFT, Text RIGHT */}
              <div className="relative order-1 lg:order-1 lg:pl-8">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100/80 bg-white/80 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent z-10" />

                  <img
                    src={imgSrc}
                    alt={`${heading} ${subHeading} – MagicNurf`}
                    className="w-full h-auto object-cover aspect-[4/5] md:aspect-[5/6] lg:aspect-square transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl" />
                </div>

                {/* Floating stat (optional) */}
                <div className="absolute -bottom-8 -left-4 md:-left-12 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-100 max-w-[240px] hidden md:block transform transition-all duration-500 hover:-translate-y-2">
                  <div className="text-4xl font-bold text-indigo-600">92%</div>
                  <div className="text-gray-600 mt-1 text-sm leading-tight">
                    of our clients maintain sobriety at 12 months
                  </div>
                </div>
              </div>

              <div className="space-y-10 order-2 lg:order-2 lg:pr-8">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium tracking-wide uppercase mb-4">
                    Why Choose MagicNurf
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    {heading}
                    <span className="text-indigo-600">{subHeading}</span>
                  </h2>
                </div>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  {para1}
                </p>

                {renderPara2()}

                {btnRequired && (
                  <div className="pt-8">
                    <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-lg transition-all duration-300 shadow-lg shadow-indigo-200/50 hover:shadow-indigo-300/70 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Discover Our Program →
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* ── DEFAULT LAYOUT ── Text LEFT, Image RIGHT */}
              <div className="space-y-10 order-2 lg:order-1 lg:pr-8">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium tracking-wide uppercase mb-4">
                    Why Choose MagicNurf
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    {heading}
                    <span className="text-indigo-600">{subHeading}</span>
                  </h2>
                </div>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  {para1}
                </p>

                {renderPara2()}

                {btnRequired && (
                  <div className="pt-8">
                    <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-lg transition-all duration-300 shadow-lg shadow-indigo-200/50 hover:shadow-indigo-300/70 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Discover Our Program →
                    </button>
                  </div>
                )}
              </div>

              <div className="relative order-1 lg:order-2 lg:pl-8">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100/80 bg-white/80 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent z-10" />

                  <img
                    src={imgSrc}
                    alt={`${heading} ${subHeading} – MagicNurf`}
                    className="w-full h-auto object-cover aspect-[4/5] md:aspect-[5/6] lg:aspect-square transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl" />
                </div>

                {/* Floating stat */}
                <div className="absolute -bottom-8 -left-4 md:-left-12 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-100 max-w-[240px] hidden md:block transform transition-all duration-500 hover:-translate-y-2">
                  <div className="text-4xl font-bold text-indigo-600">92%</div>
                  <div className="text-gray-600 mt-1 text-sm leading-tight">
                    of our clients maintain sobriety at 12 months
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}