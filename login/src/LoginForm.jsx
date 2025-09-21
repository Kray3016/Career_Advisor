import { useState } from "react";

export default function LoginForm() {
  const [values, setValues] = useState({ username: "", password: "" });
  const [focused, setFocused] = useState({ username: false, password: false });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    const storedUsersJSON = localStorage.getItem("users");
    if (!storedUsersJSON) {
      alert("No users found. Please sign up first.");
      return;
    }

    const storedUsers = JSON.parse(storedUsersJSON);

    // Find user by username
    const storedUser = storedUsers.find(
      (user) => user.username.toLowerCase() === values.username.toLowerCase()
    );

    if (!storedUser) {
      alert("User not found. Please sign up.");
      return;
    }

    if (values.password === storedUser.password) {
    //   alert("User is valid. Login successful!");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", storedUser.username);
      window.location.href = "/user"; // Redirect to user page
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="w-full max-w-sm bg-black/70 border border-cyan-400/30 rounded-2xl shadow-lg shadow-cyan-400/40 p-10 animate-[formEntrance_1.5s_ease_forwards]">
        <h2 className="text-cyan-400 text-center font-cinzel font-bold text-2xl tracking-[3px]">Login</h2>
        <p className="text-cyan-300/70 text-center mb-6 animate-pulse">Welcome Back</p>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="relative mb-6">
            <input
              type="text"
              id="username"
              required
              value={values.username}
              onChange={(e) => setValues({ ...values, username: e.target.value })}
              onFocus={() => setFocused({ ...focused, username: true })}
              onBlur={() => setFocused({ ...focused, username: false })}
              className="w-full bg-transparent border-b border-cyan-400/30 outline-none text-cyan-400 py-2 focus:border-b-transparent peer"
            />
            <label
              htmlFor="username"
              className={`absolute left-0 transition-all ${
                focused.username || values.username ? "-top-3 text-sm text-cyan-400" : "top-2 text-cyan-300/70"
              }`}
            >
              Username
            </label>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all peer-focus:w-full"></div>
          </div>
          {/* Password */}
          <div className="relative mb-6">
            <input
              type="password"
              id="password"
              required
              value={values.password}
              onChange={(e) => setValues({ ...values, password: e.target.value })}
              onFocus={() => setFocused({ ...focused, password: true })}
              onBlur={() => setFocused({ ...focused, password: false })}
              className="w-full bg-transparent border-b border-cyan-400/30 outline-none text-cyan-400 py-2 focus:border-b-transparent peer"
            />
            <label
              htmlFor="password"
              className={`absolute left-0 transition-all ${
                focused.password || values.password ? "-top-3 text-sm text-cyan-400" : "top-2 text-cyan-300/70"
              }`}
            >
              Password
            </label>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all peer-focus:w-full"></div>
          </div>
          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm mb-6">
            <label className="flex items-center gap-2 text-cyan-300/80">
              <input type="checkbox" className="accent-cyan-400" />
              Remember me
            </label>
            <a href="#" className="text-cyan-400 hover:underline">
              Forgot Password?
            </a>
          </div>
          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full border border-cyan-400 text-cyan-400 font-cinzel relative overflow-hidden group"
          >
            <span className="relative z-10">SIGN IN</span>
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent group-hover:left-[100%] transition-all duration-500"></div>
          </button>
          {/* Signup */}
          <div className="text-center text-cyan-300/70 mt-6 text-sm">
            Don’t have an account?{" "}
            <a href="/signup" className="text-cyan-400 hover:underline">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
