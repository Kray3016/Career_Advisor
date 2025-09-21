import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  // Get username from localStorage if needed for navbar
  const username = localStorage.getItem("currentUser") || "User";

  return (
    <div className="min-h-screen bg-black text-cyan-400 font-cinzel">
      {/* Fixed Navbar */}
      <Navbar username={username} />

      {/* Page content */}
      <main className="pt-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4 text-cyan-300 tracking-widest text-center hover:text-cyan-200">
          Our Motive
        </h1>
        <p className="text-lg text-cyan-400 mb-10 text-center max-w-3xl mx-auto leading-relaxed hover:text-cyan-300">
          Our goal is to evaluate your skills and guide you through a clear path to achieve your career goals.
          The process involves three key steps:
        </p>

        <ol className="list-decimal list-inside space-y-6 text-cyan-300 text-xl max-w-3xl mx-auto hover:text-cyan-200">
          <li>
            <span className="font-semibold text-cyan-400 hover:text-cyan-300">Set Your Goal: </span>
            Define your career objectives clearly and what skills you want to develop.
          </li>
          <li>
            <span className="font-semibold text-cyan-400 hover:text-cyan-300">Take the Quiz: </span>
            Assess your current knowledge and skill level with our customized quizzes.
          </li>
          <li>
            <span className="font-semibold text-cyan-400 hover:text-cyan-300">Get Guided: </span>
            Based on your quiz results, receive a personalized roadmap highlighting areas for improvement and steps to succeed in your career.
          </li>
        </ol>

        <div className="mt-12 text-center">
          <p className="italic text-cyan-400 text-lg max-w-md mx-auto hover:text-cyan-300">
            "Your journey to success begins here, with the right guidance and clear steps."
          </p>
          <a href="/quiz" className="inline-block mt-6 px-6 py-3 border border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition">
            Start Your Quiz
          </a>
        </div>
      </main>
    </div>
  );
}
