import React, { useState, useEffect } from 'react';
import "../style.css/countries.css";


const url = 'https://restcountries.com/v3.1/all';

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

  const germany = countries.filter((country) => country.name.common === 'Germany'); // Filtra o país com o nome 'Germany' (Alemanha)
  const usa = countries.filter((country) => country.name.common === 'United States'); // Filtra o país com o nome 'United States' (Estados Unidos)

  return (
    <div>
      {germany.map((country) => (
        <article key={country.name.common}>
          <h3>{country.name.common}</h3>
          <img src={country.flags.svg} alt={`Bandeira ${country.name.common}`} />
        </article>
      ))}
      {usa.map((country) => (
        <article key={country.name.common}>
          <h3>{country.name.common}</h3>
          <img src={country.flags.svg} alt={`Bandeira ${country.name.common}`} />
        </article>
      ))}
    </div>
  );
};

export default Countries;
