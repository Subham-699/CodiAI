import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#0b0b12] text-white">

        {/* HERO */}
        <section className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight
              bg-gradient-to-r from-purple-400 to-blue-400
              bg-clip-text text-transparent
              animate-[fadeUp_0.6s_ease-out]">
              Learn Smarter.
              <br /> Not Harder.
            </h1>

            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              CodiAI helps you understand programming and technical concepts
              clearly using structured, AI-powered explanations.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/learning"
                className="px-8 py-4 rounded-xl font-bold text-black
                bg-gradient-to-r from-purple-400 to-blue-400 hover:scale-105 transition"
              >
                Start Learning
              </a>

              <a
                href="/about"
                className="px-8 py-4 rounded-xl border border-white/20
                hover:bg-white/10 transition"
              >
                Why CodiAI?
              </a>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-3xl font-bold mb-3">
              Built for Understanding
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto mb-12">
              Most platforms give answers.  
              CodiAI gives explanations that actually make sense.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Clear Explanations",
                  desc: "Concepts broken down step-by-step, without fluff.",
                },
                {
                  title: "Practical Examples",
                  desc: "Real-world examples that connect ideas to code.",
                },
                {
                  title: "Smart Summaries",
                  desc: "Quick takeaways so concepts stick longer.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 backdrop-blur border border-white/10
                  rounded-2xl p-6 hover:scale-[1.02] transition"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-[#0e0e16]">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl font-bold text-center mb-14">
              How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                ["Choose a Topic", "Select what you want to learn."],
                ["Ask a Question", "Type your doubt naturally."],
                ["Get Clear Answers", "Explanations, examples, summaries."],
              ].map(([title, desc], i) => (
                <div key={title} className="text-center">
                  <div
                    className="w-12 h-12 mx-auto mb-4 rounded-full
                    bg-gradient-to-r from-purple-500 to-blue-500
                    text-black font-bold flex items-center justify-center"
                  >
                    {i + 1}
                  </div>

                  <h3 className="text-lg font-semibold mb-1">{title}</h3>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-3xl font-bold mb-4">
              Designed Like a Real Product
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto mb-10">
              Built with modern tools, real UX principles, and scalable design.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {["React", "Vite", "Tailwind CSS", "Gemini AI"].map((tech) => (
                <div
                  key={tech}
                  className="bg-white/5 rounded-xl py-4"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
          <div className="max-w-4xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-extrabold mb-4">
              Ready to Learn Differently?
            </h2>

            <p className="text-gray-400 mb-8">
              Ask better questions. Get better answers.
            </p>

            <a
              href="/learning"
              className="inline-block px-10 py-4 rounded-xl font-bold
              text-black bg-gradient-to-r from-purple-400 to-blue-400
              hover:scale-105 transition"
            >
              Open Learning Hub
            </a>
          </div>
        </section>

      </div>

      <Footer />

      {/* Animation */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
