import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from 'react-router';
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

  const navigate = useNavigate();
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;

    // Lógica para lidar com o valor selecionado (se necessário)

    // Navega para a página de destino com base no valor selecionado
    if (selectedValue === "America") {
      navigate("/america");
    } else if (selectedValue === "Africa") {
      navigate("/africa");
    } else if (selectedValue === "Europe") {
      navigate("/europe");
    }else if (selectedValue === "Oceania") {
      navigate("/oceania");
    }else if (selectedValue === "Asia") {
      navigate("/asia");
    }
  };
  return (
    <div className="">
      <div className="flex items-center justify-center mt-16 ">
        <div className="w-5/6 flex justify-between items-start  ">
          <div>
            <div className=" bg-header rounded text-center flex items-center  w-450 h-12">
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
            <select className="bg-header text-xs h-12 ml-6 text-center w-48 text-white rounded"
            onChange={handleSelectChange}>
              <option value="">Filter By Region</option>
              <option value="America">America</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
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
