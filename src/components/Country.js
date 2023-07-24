import React, { useEffect, useState } from "react";
import { MoveLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/name/" + name
      );
      const country = await response.json();

      setCountry(country);
    };
    fetchCountryData();
  }, [name]);

  return (
    <div className="p-20 mt-16 w-full h-full text-white">
      <div className="inline-flex items-center mb-12 ml-6 w-32 h-10 rounded bg-header shadow-black">
        <Link to="/">
          <p className="inline-flex items-center mt-1 ml-6">
            <MoveLeft className="mr-3" />
            Back
          </p>
        </Link>
      </div>
      {country.map((country) => (
        <div key={country.name.common} className="flex">
          <div className="w-450 border-borda border-borda-width rounded">
            <article>
              <div className="">
                <img
                  src={country.flags.svg}
                  alt={`Bandeira ${country.name.common}`}
                  className="w-full h-450 block "
                />
              </div>
            </article>
          </div>
          <div className="ml-32 p-16">
            <h2 className="text-2xl font-bold mb-2">{country.name.common}</h2>
            <div className="mt-8 text-xs ">
              <div className="mt-10">
              <p><strong>Native Name: </strong>{country.name.official}</p>
              </div>
              <div className="mt-4">
              <p><strong>Population: </strong>{country.population}</p>
              </div>
              <div className="mt-4">
              <p><strong>Region: </strong>{country.region}</p>
              </div>
              <div className="mt-4">
              <p><strong>Sub Region: </strong>{country.subregion}</p>
              </div>
              <div className="mt-4">
              <p><strong>Capital: </strong>{country.capital}</p>
              </div>
              <div className="mt-32">
              <p><strong>Border Countries: </strong>{country.capital}</p>
              </div>
            </div>
          </div>
          <div>
          <div className="mt-div text-xs ml-16 ">
              <p><strong>Top Level Domain: </strong>{country.tld}</p>
          </div>
          <div className="mt-4 text-xs ml-16 ">
              <p><strong>Fifa: </strong>{country.fifa}</p>
          </div>
          <div className="mt-4 text-xs ml-16 ">
              <p><strong>Timezone: </strong>{country.timezones}</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Country;
