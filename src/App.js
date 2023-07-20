import React from 'react';
import './App.css';
import Countries from './components/Countries';
import Country from './components/Country';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/countries/:name" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;