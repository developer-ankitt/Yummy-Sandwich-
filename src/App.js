import './App.css';
import Navbar from './components/Navbar';
// import React, { useState } from 'react';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import { Routes, Route } from "react-router-dom"


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
