import { useState } from "react";
import { fetchContextData, askAI } from "../utils/api";

export function ChatSection({ isHidden }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  const handleAsk = async () => {
    if (!question.trim()) {
      setAnswer("Please enter a question.");
      return;
    }

    try {
      setLoading(true);
      setShowGreeting(false);
      setAnswer("Thinking...");
      setShowAnswer(true);

      const contextText = await fetchContextData();
      const result = await askAI(question, contextText);

      setAnswer(result);
      setQuestion("");
    } catch (err) {
      console.error(err);
      setAnswer("Something went wrong while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      handleAsk();
    }
  };

  return (
    <section className={`fixed inset-0 px-6 py-8 flex flex-col justify-center transition-all duration-500 ease-out ${
      isHidden ? 'opacity-0 translate-y-5 pointer-events-none' : 'opacity-100 translate-y-0'
    }`}>
      <div className="max-w-2xl mx-auto w-full space-y-4">

        {showAnswer && (
          <div className={`answer-scroll bg-neutral-900 rounded-3xl px-6 py-4 text-neutral-100 h-[55vh] overflow-y-auto transition-all duration-500 ease-out ${
            showAnswer ? 'opacity-100' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}>
            {loading ? (
              <p>{answer}</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: window.marked?.parse(answer) || answer }} />
            )}
          </div>
        )}

        {showGreeting && (
          <div className={`mb-8 outline-none transition-all duration-300 ease-out px-4 ${
            showGreeting ? 'opacity-100 translate-y-0 h-auto' : 'opacity-0 translate-y-4 h-0'
          }`}>
            <h1 className="text-3xl md:text-4xl font-medium text-white leading-tight">
              Hi Freshie! <br />
              Where should we start?
            </h1>
          </div>
        )}

        <div className={`bg-neutral-900 rounded-full px-6 py-4 flex items-center transition-all duration-500 ease-out ${
          showGreeting ? 'translate-y-0' : 'translate-y-4'
        }`}>
          <input
            type="text"
            placeholder="Ask about syllabus, exams, or reports…"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-transparent text-white placeholder-neutral-500 focus:outline-none text-lg"
            disabled={loading}
          />

          <button onClick={handleAsk}
            className="ml-4 h-12 w-12 flex items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-sky-600 disabled:opacity-50 transition"
            aria-label="Send"
            disabled={loading}>
            <i className="fa-solid fa-paper-plane text-white"></i>
          </button>
        </div>

      </div>
    </section>
  );
}

