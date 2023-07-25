import React, { useState, useEffect } from "react";

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
    <div className="container  ml-20">
      <div className="flex justify-center mt-16 ">
        <div className="w-full md:w-5/6 flex flex-col md:flex-row  md:-ml-24">
          <div>
            <Pesquisa />
          </div>
          <div className="md:ml-left ml-12">
            <Filtro />
          </div>
        </div>
      </div>
      <div className="w-full md:w-5/6 ml-5 md:ml-20 mt-10 ">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
          <div class="bg-header w-294 h-352 text-white rounded shadow-md md:ml-28">
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
          <div class="bg-header w-294 h-352 text-white rounded shadow-md md:ml-56">
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
          <div class="bg-header w-294 h-352 text-white rounded shadow-md md:ml-80">
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 ">
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
          <div class="bg-header w-294 text-white rounded shadow-md md:ml-28">
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
          <div class="bg-header w-294 text-white rounded shadow-md md:ml-56">
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
          <div class="bg-header w-294 text-white rounded shadow-md md:ml-80">
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
