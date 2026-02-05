import Logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
            <div className="min-h-[60vh] lg:min-h-[70vh] px-6 py-16 md:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-12 auto-rows-fr">

                        {/* Column 1 – Contact Form – WITH card styling */}
                        <div className="space-y-6 flex flex-col bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                            <h3 className="text-2xl font-bold text-white tracking-tight">Get in Touch</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We'd love to hear from you. Drop us a message!
                            </p>

                            <form className="space-y-4 flex-grow flex flex-col">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder-gray-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder-gray-500"
                                />
                                <textarea
                                    rows={6}
                                    placeholder="Your Message..."
                                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder-gray-500 resize-none flex-grow"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-md shadow-blue-900/30 mt-auto"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Column 2 – Navigation – NO border, NO background */}
                        <div className="space-y-6 flex flex-col">
                            <h3 className="text-2xl font-bold text-white tracking-tight">Navigation</h3>

                            <nav className="flex flex-col space-y-3.5 text-gray-300 flex-grow">
                                <a href="#" className="hover:text-white transition-all hover:translate-x-1.5 inline-block duration-200 py-1">Home</a>
                                <a href="#" className="hover:text-white transition-all hover:translate-x-1.5 inline-block duration-200 py-1">About Us</a>
                                <a href="#" className="hover:text-white transition-all hover:translate-x-1.5 inline-block duration-200 py-1">Programs</a>
                                <a href="#" className="hover:text-white transition-all hover:translate-x-1.5 inline-block duration-200 py-1">Why Us</a>
                                <a href="#" className="hover:text-white transition-all hover:translate-x-1.5 inline-block duration-200 py-1">Contact Us</a>

                                {/* Helps stretch height if needed */}
                                <div className="flex-grow min-h-[1px]"></div>
                            </nav>
                        </div>

                        {/* Column 3 – Contact Info + Logo – NO border, NO background */}
                        <div className="space-y-6 flex flex-col">
                            <div>

                                <div className="w-48 h-16 bg-gray-700/40 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-6 shadow-inner">
                                    <img src={Logo} alt="" width={30} />
                                </div>
                            </div>

                            <div className="space-y-5 text-gray-300 flex-grow">
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span>+91-8077851238</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <span>asifk0980@gmail.com</span>
                                </div>

                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span>

                                        46/44, Arvind Marg, near Ambedkar Park, Kandholi, Chironwali, Dehradun, Uttarakhand 248001</span>
                                </div>

                                <div className="flex-grow min-h-[1px]"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 bg-black/40">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center md:text-left text-gray-500 text-sm">
                    © {new Date().getFullYear()} Your Institute Name. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;