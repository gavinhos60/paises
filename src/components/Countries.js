import React, { useState, useEffect } from "react";


import "../style.css/countries.css";
import { Link } from "react-router-dom";
import Pesquisa from "./Pesquisa";
import Filtro from "./Filtro";

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
    (country) => country.name.common === "Spain"
  );
  const eua = countries.filter((country) => country.name.common === "Suriname");
  const brasil = countries.filter(
    (country) => country.name.common === "Brazil"
  );
  const iceland = countries.filter(
    (country) => country.name.common === "Iceland"
  );
  const afg = countries.filter(
    (country) => country.name.common === "Afghanistan"
  );
  const frace = countries.filter((country) => country.name.common === "France");
  const italia = countries.filter((country) => country.name.common === "Italy");
  const portugal = countries.filter(
    (country) => country.name.common === "Portugal"
  );

  
  return (
    <div className="">
      <div className="flex items-center justify-center mt-16 ">
        <div className="w-5/6 flex justify-between items-start  ">
          <div>
         <Pesquisa />
          </div>         
            <Filtro />          
        </div>
      </div>
      <div className="w-5/6 h-750 ml-40 ">
        <div class="grid grid-cols-4 gap-36 mt-10">
          <div className="dark-mode">
            <div class="bg-header w-294 h-92 text-white rounded shadow-md">
              {germany.map((country) => (
                <article key={country.name.common}>
                  <div className="">
                    <img
                      src={country.flags.svg}
                      alt={`Bandeira ${country.name.common}`}
                      className="w-full h-auto block "
                    />
                  </div>
                  <div className="p-5 font-bold">
                    <Link
                      className="ml-36 text-blue-700"
                      to={`/countries/${country.name.common}`}
                    >
                      <h3>{country.name.common}</h3>
                    </Link>
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
          <div class="bg-header w-294 h-352 text-white rounded shadow-md">
            {eua.map((country) => (
              <article key={country.name.common}>
                <div className="">
                  <img
                    src={country.flags.svg}
                    alt={`Bandeira ${country.name.common}`}
                    className="w-full h-auto block "
                  />
                </div>
                <div className="p-5 font-bold">
                  <Link
                    className="ml-36 text-blue-700"
                    to={`/countries/${country.name.common}`}
                  >
                    <h3>{country.name.common}</h3>
                  </Link>
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
          <div class="bg-header w-294 h-352 text-white rounded shadow-md">
            {brasil.map((country) => (
              <article key={country.name.common}>
                <div className="">
                  <img
                    src={country.flags.svg}
                    alt={`Bandeira ${country.name.common}`}
                    className="w-full h-auto block "
                  />
                </div>
                <div className="p-3 ml-2 font-bold">
                  <Link
                    className="ml-36 text-blue-700"
                    to={`/countries/${country.name.common}`}
                  >
                    <h3>{country.name.common}</h3>
                  </Link>
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
          <div class="bg-header w-294 h-352 text-white rounded shadow-md">
            {iceland.map((country) => (
              <article key={country.name.common}>
                <div className="">
                  <img
                    src={country.flags.svg}
                    alt={`Bandeira ${country.name.common}`}
                    className="w-full h-52 block"
                  />
                </div>
                <div className="p-3 ml-3 font-bold">
                  <Link
                    className="ml-36 text-blue-700"
                    to={`/countries/${country.name.common}`}
                  >
                    <h3>{country.name.common}</h3>
                  </Link>
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
        <div class="grid grid-cols-4 gap-36 mt-10">
          <div class="bg-header w-294 text-white rounded shadow-md">
            {afg.map((country) => (
              <article key={country.name.common}>
                <div className="">
                  <img
                    src={country.flags.svg}
                    alt={`Bandeira ${country.name.common}`}
                    className="w-full h-48 block"
                  />
                </div>
                <div className="p-5 font-bold">
                  <Link
                    className="ml-36 text-blue-700"
                    to={`/countries/${country.name.common}`}
                  >
                    <h3>{country.name.common}</h3>
                  </Link>
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
          <div class="bg-header w-294 text-white rounded shadow-md">
            {frace.map((country) => (
              <article key={country.name.common}>
                <div className="">
                  <img
                    src={country.flags.svg}
                    alt={`Bandeira ${country.name.common}`}
                    className="w-full h-auto block"
                  />
                </div>
                <div className="p-5 font-bold">
                  <Link
                    className="ml-36 text-blue-700"
                    to={`/countries/${country.name.common}`}
                  >
                    <h3>{country.name.common}</h3>
                  </Link>
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
          <div class="bg-header w-294 text-white rounded shadow-md">
            {italia.map((country) => (
              <article key={country.name.common}>
                <div className="">
                  <img
                    src={country.flags.svg}
                    alt={`Bandeira ${country.name.common}`}
                    className="w-full h-auto block"
                  />
                </div>
                <div className="p-5 font-bold">
                  <Link
                    className="ml-36 text-blue-700"
                    to={`/countries/${country.name.common}`}
                  >
                    <h3>{country.name.common}</h3>
                  </Link>
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
          <div class="bg-header w-294 text-white rounded shadow-md">
            {portugal.map((country) => (
              <article key={country.name.common}>
                <div className="">
                  <img
                    src={country.flags.svg}
                    alt={`Bandeira ${country.name.common}`}
                    className="w-full h-auto block"
                  />
                </div>
                <div className="p-5 font-bold">
                  <Link
                    className="ml-36 text-blue-700"
                    to={`/countries/${country.name.common}`}
                  >
                    <h3>{country.name.common}</h3>
                  </Link>
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
      </div>
    </div>
  );
};

export default Countries;
