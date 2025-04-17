import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import FoodList from "./components/FoodList";
import FoodDetail from "./components/FoodDetail";

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/foods" element={<FoodList />} />
          <Route path="/foods/:id" element={<FoodDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
