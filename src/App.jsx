import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cv from './pages/Cv';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';


function App() {
  return (
    <>
      <Header />
      <div className="app_container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<Cv />} />
        </Routes>
      </div>
    </>
  )
}

export default App
