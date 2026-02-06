import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#0b0b12] text-white px-6 py-24">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-8
            bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Contact
          </h1>

          <p className="text-gray-400 mb-12">
            Have feedback, questions, or ideas? Reach out.
          </p>

          <div className="bg-white/5 backdrop-blur border border-white/10
            rounded-3xl p-8 space-y-6">

            <input
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-black/40
              border border-white/10 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <input
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-xl bg-black/40
              border border-white/10 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full px-4 py-3 rounded-xl bg-black/40
              border border-white/10 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <button
              className="px-8 py-3 rounded-xl font-bold text-black
              bg-gradient-to-r from-purple-400 to-blue-400 hover:scale-105 transition"
            >
              Send Message
            </button>
          </div>

          {/* PROFESSIONAL CONTACT CARDS */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* EMAIL CARD */}
            <div className="bg-white/5 border border-white/10 backdrop-blur
              rounded-2xl p-6 hover:border-purple-400/40 transition">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Email
              </p>
              <p className="text-sm text-gray-200">
                aaryavhumagain430@gmail.com
              </p>
            </div>

            {/* GITHUB CARD */}
            <div className="bg-white/5 border border-white/10 backdrop-blur
              rounded-2xl p-6 hover:border-purple-400/40 transition">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                GitHub
              </p>
              <a
                href="https://github.com/Subham-699"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-purple-400 hover:underline"
              >
                github.com/Subham-699
              </a>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
