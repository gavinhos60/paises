import React from "react";

import { useNavigate } from "react-router";
const Filtro = () => {
  
  
  const navigate = useNavigate();
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
   
    if (selectedValue === "America") {
      navigate("/america");
    } else if (selectedValue === "Africa") {
      navigate("/africa");
    } else if (selectedValue === "Europe") {
      navigate("/europe");
    } else if (selectedValue === "Oceania") {
      navigate("/oceania");
    } else if (selectedValue === "Asia") {
      navigate("/asia");
    }
  };
  return (
    <div>
      <select
        className="bg-header text-xs h-12 ml-6 text-center w-48 text-white rounded"
        onChange={handleSelectChange}
      >
        <option value="">Filter By Region</option>
        <option value="America">America</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filtro;
