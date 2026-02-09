export function OnboardingSection({ onContinue, isHidden }) {
  return (
    <section className={`fixed inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
      isHidden ? 'opacity-0 -translate-y-5 pointer-events-none' : 'opacity-100 translate-y-0'
    }`}>
      <div className="text-center px-0 py-24 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white">
          Chat with
          <span
            className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 ml-2">
            FreshStart AI
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-300">
          Confused about syllabus, exams, or report formats? Let's get you started
        </p>

        <p className="mt-4 text-slate-300 text-sm">
          Choose your branch: <span className="font-semibold text-white">AI&DS</span>
        </p>

        <div className="mt-8">
          <button onClick={onContinue}
            className="inline-block bg-gradient-to-br from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white px-6 py-3 rounded-full shadow-lg transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
