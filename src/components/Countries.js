import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

import "../style.css/countries.css";
import { Link } from "react-router-dom";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
            <div className=" bg-header rounded text-center flex items-center shadow-md w-450 h-12">
              <Link className="ml-3" to={`/countries/${searchTerm}`}>
                <button>
                  <Search color="white" size={26} className=" ml-6 mr-2 mb-1" />
                </button>
              </Link>
              <input
                value={searchTerm}
                onChange={handleChange}
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
      </div>
      <div className="w-5/6 h-750 ml-40 ">
        <div class="grid grid-cols-4 gap-36 mt-10">
          <div className="dark-mode">
            <div class="bg-header w-294  text-white rounded shadow-2xl">
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
                    <h3>{country.name.common}</h3>
                    <div className="font-normal">
                      <div className="mt-3 text-xs">
                        Population: {country.population}
                      </div>
                      <p className="mt-1 text-xs">Region: {country.region}</p>
                      <p className="mt-1 text-xs">Capital: {country.capital}</p>
                    </div>
                    <Link
                      className="ml-3"
                      to={`/countries/${country.name.common}`}
                    >
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div class="bg-header w-294  text-white rounded shadow-2xl">
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
          <div class="bg-header w-294  text-white rounded shadow-2xl">
            {brasil.map((country) => (
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
          <div class="bg-header w-294 text-white rounded shadow-2xl">
            {iceland.map((country) => (
              <article key={country.name.common}>
                <div className="">
                  <img
                    src={country.flags.svg}
                    alt={`Bandeira ${country.name.common}`}
                    className="w-full h-52 block"
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
        <div class="grid grid-cols-4 gap-36 mt-20">
          <div class="bg-header w-294 text-white rounded shadow-2xl">
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
          <div class="bg-header w-294 text-white rounded shadow-2xl">
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
          <div class="bg-header w-294 text-white rounded shadow-2xl">
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
          <div class="bg-header w-294 text-white rounded shadow-2xl">
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

        {/*{germany.map((country) => (
        <article key={country.name.common}>
          <h3>{country.name.common}</h3>
          <img src={country.flags.svg} alt={`Bandeira ${country.name.common}`} />
    </article>
      ))} >*/}
      </div>
    </div>
  );
};

export default Countries;
