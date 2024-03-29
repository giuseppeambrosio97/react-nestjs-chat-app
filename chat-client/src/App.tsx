import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// tailwind css
import "./global.css";

// primreact css
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css"; // core css
import "./App.css";
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
