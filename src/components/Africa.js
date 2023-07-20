import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Africa = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/region/africa"
      );
      const country = await response.json();
      
      setCountry(country);     
    };
    fetchCountryData();
  });
  
  return (
    <div className="flex justify-center">
        
      <Link to="/">BackHome</Link>
      <div class="bg-header w-294  text-white rounded shadow-md">
            {country.map((country) => (
              <article key={country.name.common}>
                <div className="">
                  <img
                    src={country.flags.svg}
                    alt={`Bandeira ${country.name.common}`}
                    className="w-full h-auto block "
                  />
                </div>
                <div className="p-5 font-bold">
                  <h3>{country.name.common}</h3>
                  <div className="font-normal">
                    <div className="mt-3 text-xs">
                      Population: {country.population}
                    </div>
                    <p className="mt-1 text-xs">Region: {country.region}</p>
                    <p className="mt-1 text-xs">Capital: {country.capital}</p>
                  </div>                 
                
                </div>
              </article>
            ))}
          </div>
    </div>
  );
};

export default Africa;
