import React, { useState, useRef, useEffect } from "react";

export default function Navbar({ username }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };

  return (
    <nav className="w-full bg-black/90 px-6 py-3 flex items-center justify-between border-b border-cyan-600 shadow-glow-cyan relative z-50">
      {/* Left side links */}
      <div className="flex space-x-8 text-cyan-400 font-semibold text-lg">
        <a href="/home" className="hover:text-cyan-200 transition">
          Home
        </a>
        <a href="/quiz" className="hover:text-cyan-200 transition">
          Quiz
        </a>
        <a href="/roadmap" className="hover:text-cyan-200 transition">
          Roadmap
        </a>
      </div>

      {/* Right side welcome with dropdown */}
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="text-cyan-400 font-cinzel text-lg focus:outline-none flex items-center gap-2"
          aria-haspopup="true"
          aria-expanded={open}
        >
          Welcome, <span className="text-cyan-300">{username}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        {open && (
          <ul className="absolute right-0 mt-2 w-36 bg-black border border-cyan-600 rounded-md shadow-lg shadow-cyan-400/70">
            <li>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-cyan-400 hover:text-black transition font-semibold"
              >
                Log Out
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
