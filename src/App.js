import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  // Optional: Simulated data for `searchData` prop
  const searchData = ["Song 1", "Song 2", "Podcast 1", "Podcast 2"];

  return (
    <Router>
      <div>
        {/* Navbar will be rendered on all pages */}
        <Navbar searchData={searchData} />
        
        {/* Define routes and components */}
        <Routes>
          <Route
            path="/"
            element={
              <Hero /> // Main Hero Section on the homepage
            }
          />
          {/* Add more routes for other pages if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

