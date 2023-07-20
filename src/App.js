import React from "react";
import "./App.css";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Asia from "./components/Asia";
import Europe from "./components/Europe";
import America from "./components/America";
import Oceania from "./components/Oceania";
import Africa from "./components/Africa";
import Filtro from "./components/Filtro";



function App() {
  return (
    <div>
      <Router>
        <Header />  
       
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/countries/:name" element={<Country />} />
          <Route path="/asia" element={<Asia />} />
          <Route path="/europe" element={<Europe />} />
          <Route path="/america" element={<America />} />
          <Route path="/oceania" element={<Oceania />} />
          <Route path="/africa" element={<Africa />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
