import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./pages/Header";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./server";
export default function App() {
  return (
    <div className="bg-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
