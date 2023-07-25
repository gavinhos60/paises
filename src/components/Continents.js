import React, { Suspense, useEffect, useState } from "react";
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
  }, [name]);

  

  return (
    <div className="container ml-20">
      <Suspense fallback={<p>Carregando...</p>}>
        <div className="flex justify-center mt-16">
          <div className="w-full md:w-5/6 flex flex-col md:flex-row md:-ml-24">
            <div>
              <Pesquisa />
            </div>
            <div className="md:ml-left ml-12">
              <Filtro />
            </div>
          </div>
        </div>
        <div className="grid md:gap-x-72 grid-cols-1 md:grid-cols-4 md:ml-20">
          {countries.map((country) => (
            <article key={country.name.common}>
              <div className="bg-header w-294 h-92 text-white rounded shadow-md mt-10">
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
              </div>
            </article>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Continents;
