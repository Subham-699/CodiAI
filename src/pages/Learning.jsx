import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const subjects = [
  "JavaScript",
  "React",
  "Python",
  "HTML / CSS",
  "Machine Learning",
];

// clean markdown + professional formatting
const cleanText = (text) =>
  text
    // replace // with arrows
    .replace(/\/\/\s*/g, "→ ")

    // remove markdown symbols
    .replace(/[#*_>`~-]/g, "")

    // spacing before arrows
    .replace(/\n→/g, "\n\n→")

    // clean extra new lines
    .replace(/\n{3,}/g, "\n\n")

    .trim();

const Learning = () => {
  const [topic, setTopic] = useState("");
  const [input, setInput] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRequest = async () => {
    if (!topic || !input.trim()) return;

    const currentRequest = input;

    setQuestion(currentRequest);
    setInput("");
    setAnswer("");
    setIsLoading(true);

    const prompt = `
You are a professional ${topic} instructor.

Rules:
- Separate sections with clear headings.
- Use line breaks for readability.
- Use // to indicate methods, steps, or important points.
- Do NOT use markdown symbols.
- Ensure the response directly answers "${currentRequest}".

Question:
"${currentRequest}"
`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      setAnswer(cleanText(response.text));
    } catch (err) {
      setAnswer("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* PAGE WRAPPER */}
      <div className="min-h-screen bg-[#0b0b12] pt-24 flex flex-col">

        {/* CONTENT */}
        <div className="flex-1 px-4">
          <div className="max-w-5xl mx-auto flex flex-col">

            {/* TITLE */}
            <h1
              className="text-3xl font-bold text-center mb-8
              bg-gradient-to-r from-purple-400 to-blue-400
              bg-clip-text text-transparent"
            >
              AI Learning Hub
            </h1>

            {/* SUBJECT SELECTOR */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {subjects.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setTopic(sub)}
                  className={`px-5 py-2 rounded-full text-sm font-medium
                    border transition
                    ${
                      topic === sub
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-black border-transparent"
                        : "border-white/10 text-gray-300 hover:border-purple-400"
                    }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* CHAT WINDOW */}
            <div
              className="flex-1 overflow-y-auto space-y-14 pb-24
              max-h-[60vh]"
            >

              {/* QUESTION */}
              {question && (
                <div className="flex justify-end">
                  <div
                    className="max-w-[65%]
                    bg-gradient-to-r from-purple-500 to-blue-500
                    text-black text-sm font-medium
                    px-5 py-3 rounded-2xl rounded-br-md shadow"
                  >
                    {question}
                  </div>
                </div>
              )}

              {/* ANSWER */}
              {answer && (
                <div className="flex justify-center">
                  <div
                    className="w-full md:w-4/5
                    bg-white/5 border border-white/10
                    rounded-2xl p-6 text-gray-200
                    leading-relaxed backdrop-blur shadow-lg"
                  >
                    <p className="text-sm whitespace-pre-line">
                      {answer}
                    </p>

                    <div className="mt-8 h-px bg-white/10" />
                  </div>
                </div>
              )}

              {isLoading && (
                <p className="text-center text-gray-400 text-sm animate-pulse">
                  AI is thinking...
                </p>
              )}
            </div>
          </div>
        </div>

        {/* INPUT BAR */}
        <div
          className="sticky bottom-0 bg-[#0b0b12]/95 backdrop-blur
          border-t border-white/10 px-4 py-4 z-40"
        >
          <div className="max-w-5xl mx-auto flex gap-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                topic
                  ? `Ask something about ${topic}...`
                  : "Select a subject to start"
              }
              rows={2}
              disabled={!topic}
              className="flex-1 bg-[#0e0e16]
              border border-white/10 rounded-xl
              text-white placeholder-gray-400
              px-4 py-3 resize-none
              focus:outline-none focus:border-purple-500
              disabled:opacity-50"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleRequest();
                }
              }}
            />

            <button
              onClick={handleRequest}
              disabled={!topic || isLoading}
              className="bg-gradient-to-r from-purple-500 to-blue-500
              text-black font-semibold px-6 rounded-xl
              hover:opacity-90 transition
              disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Learning;
