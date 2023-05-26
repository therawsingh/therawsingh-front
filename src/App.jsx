import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import First from "./pages/First";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<First />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
