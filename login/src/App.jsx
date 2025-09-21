import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignupForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import UserPage from "./UserPage";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import RoadMaps from "./Components/RoadMap";

// Protected Route component
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn === "true" ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />

        {/* Protected Routes */}
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/quiz" 
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/roadmap" 
          element={
            <ProtectedRoute>
              <RoadMaps />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/user" 
          element={
            <ProtectedRoute>
              <>
                <Navbar username={localStorage.getItem("currentUser") || "User"} />
                <UserPage username={localStorage.getItem("currentUser") || "User"} />
              </>
            </ProtectedRoute>
          }
        />

        {/* Default redirect to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
