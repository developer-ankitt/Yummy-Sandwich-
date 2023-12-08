import './App.css';
// import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import { Routes, Route } from "react-router-dom"

//--------------------------------- http://localhost:3000/Yummy-Sandwich- -------------------------------------------


function App() {

  return (
    <>
      <Navbar title=" Yummy Sandwich" />
      <Routes>
        <Route path="/Yummy-Sandwich-home" element={<Home />} />
        <Route path="/Yummy-Sandwich-products" element={<Products page1="Products" />} /> {/* props not working*/}
        <Route path="/Yummy-Sandwich-blogs" element={<Blogs page2="Blogs" />} />          {/* props not working*/}
      </Routes>
    </>
  );
}

export default App;
