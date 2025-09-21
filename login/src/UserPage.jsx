import React from "react";

export default function UserPage({ username }) {
  // Optionally get username from localStorage or props

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-cyan-400 font-cinzel p-6">
      <div className="max-w-md w-full text-center bg-black/70 border border-cyan-400/30 rounded-2xl shadow-lg shadow-cyan-400/50 p-10">
        <h1 className="text-4xl font-bold mb-4 tracking-widest text-cyan-300">
          Welcome, {username}!
        </h1>
        <p className="text-cyan-400/80 mb-8">
          You have successfully logged in to your account.
        </p>

        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("currentUser");
            window.location.href = "/login"; // Redirect to login
          }}
          className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition">
          Log Out
        </button>
      </div>
    </div>
  );
}
