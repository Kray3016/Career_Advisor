import { useState } from "react";

export default function SignupForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [focused, setFocused] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.password !== values.confirmPassword) {
      alert("Password and Confirm Password do not match! Try Again!");
      return;
    }

    const newUser = {
      username: values.username,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    const storedUsersJSON = localStorage.getItem("users");
    const storedUsers = storedUsersJSON ? JSON.parse(storedUsersJSON) : [];

    // Check if username exists
    const usernameExists = storedUsers.some(
      (user) => user.username.toLowerCase() === newUser.username.toLowerCase()
    );

    if (usernameExists) {
      alert("You have already signed up, Please Login!");
      return;
    }

    // Check if email exists for a different user
    const emailExists = storedUsers.some(
      (user) => user.email.toLowerCase() === newUser.email.toLowerCase()
    );

    if (emailExists) {
      alert("This e-mail is already registered");
      return;
    }

    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    console.log("User signed up:", newUser);

    setValues({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="w-full max-w-sm bg-black/70 border border-cyan-400/30 rounded-2xl shadow-lg shadow-cyan-400/40 p-10 animate-[formEntrance_1.5s_ease_forwards]">
        <h2 className="text-cyan-400 text-center font-cinzel font-bold text-2xl tracking-[3px]">
          Sign Up
        </h2>
        <p className="text-cyan-300/70 text-center mb-6 animate-pulse">
          Create your account
        </p>

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
                focused.username || values.username
                  ? "-top-3 text-sm text-cyan-400"
                  : "top-2 text-cyan-300/70"
              }`}
            >
              Username
            </label>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all peer-focus:w-full"></div>
          </div>

          {/* Email */}
          <div className="relative mb-6">
            <input
              type="email"
              id="email"
              required
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              onFocus={() => setFocused({ ...focused, email: true })}
              onBlur={() => setFocused({ ...focused, email: false })}
              className="w-full bg-transparent border-b border-cyan-400/30 outline-none text-cyan-400 py-2 focus:border-b-transparent peer"
            />
            <label
              htmlFor="email"
              className={`absolute left-0 transition-all ${
                focused.email || values.email
                  ? "-top-3 text-sm text-cyan-400"
                  : "top-2 text-cyan-300/70"
              }`}
            >
              Email
            </label>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all peer-focus:w-full"></div>
          </div>

          {/* Password */}
          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
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
                focused.password || values.password
                  ? "-top-3 text-sm text-cyan-400"
                  : "top-2 text-cyan-300/70"
              }`}
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-2 text-cyan-400 text-sm select-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all peer-focus:w-full"></div>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-6">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              required
              value={values.confirmPassword}
              onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
              onFocus={() => setFocused({ ...focused, confirmPassword: true })}
              onBlur={() => setFocused({ ...focused, confirmPassword: false })}
              className="w-full bg-transparent border-b border-cyan-400/30 outline-none text-cyan-400 py-2 focus:border-b-transparent peer"
            />
            <label
              htmlFor="confirmPassword"
              className={`absolute left-0 transition-all ${
                focused.confirmPassword || values.confirmPassword
                  ? "-top-3 text-sm text-cyan-400"
                  : "top-2 text-cyan-300/70"
              }`}
            >
              Confirm Password
            </label>
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-0 top-2 text-cyan-400 text-sm select-none"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all peer-focus:w-full"></div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full border border-cyan-400 text-cyan-400 font-cinzel relative overflow-hidden group"
          >
            <span className="relative z-10">SIGN UP</span>
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent group-hover:left-[100%] transition-all duration-500"></div>
          </button>

          <div className="text-center text-cyan-300/70 mt-6 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-cyan-400 hover:underline">
              Login
            </a>
            {/* uncomment below if local storage becomes full */}
                {/* {localStorage.clear()} */}
          </div>
        </form>
      </div>
    </div>
  );
}
