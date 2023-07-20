import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pesquisa from "./Pesquisa";
import Filtro from "./Filtro";

const Continents = () => {
  const [countries, setCountries] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/region/" + name
      );
      const countries = await response.json();
      setCountries(countries);
    };
    fetchCountryData();
  }, []);

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
      <div className="w-5/6 h-750 ml-40 grid grid-cols-4 gap-36 mt-10">
        {countries.map((country) => (
          <div key={country.name.common} className="dark-mode">
            <div className="bg-header w-294 h-92 text-white rounded shadow-md">
              <article>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Continents;
