import './App.css';
import Navbar from './components/Navbar';
// import React, { useState } from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Routes, Route } from "react-router-dom"

//--------------------------------- http://localhost:3000/Yummy-Sandwich- -------------------------------------------


function App() {

  return (
    <>
      <Navbar title="Yummy Sandwich🥪" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
