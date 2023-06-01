import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./pages/First";
import Second from "./pages/Second";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<First />} />
          <Route path="/tools" element={<Second />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
