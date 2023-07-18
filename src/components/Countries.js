import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

import "../style.css/countries.css";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  const germany = countries.filter(
    (country) => country.name.common === "Germany"
  );

  return (
    <div className="flex items-center justify-center mt-16">
      <div className="w-5/6 h-800 flex justify-between items-start  ">
        <div>
          <div className=" bg-header rounded text-center flex items-center shadow-md w-450 h-12 ">
            <button>
              <Search color="white" size={26} className=" ml-6 mr-2 mb-1" />
            </button>
            <input
              type="text"
              className="bg-header w-full h-full ml-6  flex text-center text-white"
              placeholder="Search for a contry..."
            />
          </div>
        </div>
        <div className="">
          <select className="bg-header h-12 ml-6 text-center w-44 text-white rounded">
            <option value="valor1">None</option>
            <option value="valor2">Valor 2</option>
            <option value="valor3">Valor 3</option>
          </select>
        </div>
      </div>
      {/*} 
      
    {germany.map((country) => (
        <article key={country.name.common}>
          <h3>{country.name.common}</h3>
          <img src={country.flags.svg} alt={`Bandeira ${country.name.common}`} />
    </article>
      ))}     */}
    </div>
  );
};

export default Countries;
