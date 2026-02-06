import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden">

        {/* ===== Background Glow Blobs ===== */}
        <div className="absolute top-[-200px] left-[-150px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[160px] opacity-30"></div>
        <div className="absolute bottom-[-200px] right-[-150px] w-[400px] h-[400px] bg-blue-600 rounded-full blur-[160px] opacity-30"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">

          {/* ===== HERO ===== */}
          <section className="text-center mb-24">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text mb-6">
              About CodiAI
            </h1>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              CodiAI is redefining how developers build software using the power
              of Artificial Intelligence. We blend automation, creativity, and
              modern engineering to help developers ship faster than ever.
            </p>
          </section>

          {/* ===== GLASS CARD GRID ===== */}
          <section className="grid md:grid-cols-2 gap-10">

            {/* Mission Card */}
            <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]">

              <h2 className="text-2xl font-semibold mb-4 group-hover:text-purple-400 transition">
                🎯 Our Mission
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Our mission is to empower developers by simplifying coding using
                intelligent AI assistance. We aim to remove complexity and help
                developers focus on creativity and innovation.
              </p>
            </div>

            {/* Vision Card */}
            <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">

              <h2 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition">
                🌍 Our Vision
              </h2>

              <p className="text-gray-400 leading-relaxed">
                We envision a world where AI becomes every developer’s co-pilot,
                accelerating learning, debugging, and software creation.
              </p>
            </div>

            {/* Features Card */}
            <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]">

              <h2 className="text-2xl font-semibold mb-4 group-hover:text-pink-400 transition">
                💡 What We Provide
              </h2>

              <ul className="space-y-3 text-gray-400">
                <li>✔ AI Code Generation</li>
                <li>✔ Smart Debugging</li>
                <li>✔ Learning Assistance</li>
                <li>✔ Developer Productivity Tools</li>
              </ul>
            </div>

            {/* Why Choose Card */}
            <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)]">

              <h2 className="text-2xl font-semibold mb-4 group-hover:text-green-400 transition">
                ⭐ Why Choose CodiAI
              </h2>

              <p className="text-gray-400 leading-relaxed">
                We combine cutting-edge AI with a sleek developer-first
                experience. Built with modern technologies, designed for real
                productivity.
              </p>
            </div>

          </section>

          {/* ===== CREATOR SECTION ===== */}
          <section className="mt-28 text-center">

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition">

              <h2 className="text-3xl font-bold mb-4">
                👨‍💻 Built By Passionate Developers
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                CodiAI is created by developers who believe Artificial
                Intelligence should enhance creativity, not replace it. Our goal
                is to make software development faster, smarter, and more fun.
              </p>

            </div>

          </section>

          {/* ===== CTA ===== */}
          <section className="mt-24 text-center">

            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Ready To Build Smarter?
            </h2>

            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-110 transition transform font-semibold shadow-lg shadow-purple-500/30">
              Start Exploring CodiAI 🚀
            </button>

          </section>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
