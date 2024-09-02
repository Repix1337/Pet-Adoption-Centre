import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import MainSite from './pages/Mainsite';
import reportWebVitals from './reportWebVitals';
import Searchsite from './pages/Searchsite';
import AdoptPage from './pages/adoptpage'; // Make sure the import path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/search" element={<Searchsite />} />
        <Route path="/adopt" element={<AdoptPage />} />
        {/* You can add more routes here as needed */}
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
