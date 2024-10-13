import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./globals.css";
import "@fontsource-variable/inter";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Dynamic route for each user's profile (e.g., /Zando, /John) */}
        <Route path="/:username" element={<Profile />} />

        {/* If no match found, redirect to NotFound or some error page */}
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
