import Image1 from "../../assets/image-7.jpg";
import Image2 from "../../assets/image-8.jpg";
import Image3 from "../../assets/image-9.png";
import Image4 from "../../assets/image-10.jpeg";

export default function CallToActionSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Main Card – bigger shadow, softer border, subtle bg */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200/70 transition-all duration-500 hover:shadow-3xl hover:border-indigo-200/60">

          {/* Upper split section */}
          <div className="grid lg:grid-cols-2 gap-0">

            {/* Left - Image area */}
            <div className="relative h-80 lg:h-auto bg-gradient-to-br from-indigo-50/80 to-blue-50/70 flex items-center justify-center p-8 lg:p-12 overflow-hidden">
              <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white/90 transform transition-transform duration-700 hover:scale-105 hover:rotate-1">
                <img
                  src={Image4}
                  alt="Happy team working together"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Decorative blob – softer */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
            </div>

            {/* Right - Text + CTA */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                MagicNurf
                <span className="text-indigo-600"> The Leading Nasha Mukti Kendra for Lasting Recovery</span>
              </h2>

              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                MagicNurf आपके जीवन को बदलने के लिए समर्पित है, जो सबसे प्रभावी नशामुक्ति कार्यक्रम प्रदान करता है। सबसे अच्छे पुनर्वास केंद्र के रूप में, हम व्यक्तिगत देखभाल, समग्र उपचार और विशेषज्ञ मार्गदर्शन प्रदान करते हैं ताकि व्यक्तियों को नशे से छुटकारा पाने में मदद मिल सके।
              </p>

              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                MagicNurf is dedicated to transforming lives by offering the most effective addiction recovery programs. As the best rehab centre, we provide personalized care, holistic therapies, and expert guidance to help individuals break free from substance abuse.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-lg transition-all duration-300 shadow-lg shadow-indigo-200/50 hover:shadow-indigo-300/60 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Read More →
                </button>

                {/* Optional secondary button if needed */}
                {/* <button className="px-8 py-4 bg-white border-2 border-indigo-200 hover:border-indigo-400 text-indigo-700 font-semibold rounded-xl text-lg transition-all duration-300 hover:shadow-md">
                  Contact Us
                </button> */}
              </div>
            </div>
          </div>

          {/* Lower Part - 3 feature cards with animations */}
          <div className="border-t border-gray-100/70 px-6 py-10 md:px-12 lg:px-16 bg-gray-50/40">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

              {/* Card 1 */}
              <div className="group bg-white rounded-2xl p-6 shadow-md border border-gray-200/60 hover:shadow-xl hover:border-indigo-200/50 hover:-translate-y-2 transition-all duration-300 ease-out">
                <h3 className="text-xl font-bold text-gray-800 mb-5 group-hover:text-indigo-700 transition-colors duration-300">
                  Lightning Fast Setup
                </h3>
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={Image1}
                    alt="Fast setup illustration"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-white rounded-2xl p-6 shadow-md border border-gray-200/60 hover:shadow-xl hover:border-indigo-200/50 hover:-translate-y-2 transition-all duration-300 ease-out">
                <h3 className="text-xl font-bold text-gray-800 mb-5 group-hover:text-indigo-700 transition-colors duration-300">
                  Real-time Analytics
                </h3>
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={Image2}
                    alt="Analytics dashboard"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-white rounded-2xl p-6 shadow-md border border-gray-200/60 hover:shadow-xl hover:border-indigo-200/50 hover:-translate-y-2 transition-all duration-300 ease-out">
                <h3 className="text-xl font-bold text-gray-800 mb-5 group-hover:text-indigo-700 transition-colors duration-300">
                  24/7 Expert Support
                </h3>
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={Image3}
                    alt="Support team"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}