import React from "react";
import "./App.css";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Continents from "./components/Continents";


function App() {
  return (
    <div>
      <Router>
        <Header />  
       
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/countries/:name" element={<Country />} />          
          <Route path="/continents/:name" element={<Continents />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
