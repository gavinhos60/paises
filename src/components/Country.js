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
      const countryData = await response.json();

      // The API response contains an object, not an array.
      // We need to convert it to an array for mapping in the component.
      const countryArray = countryData instanceof Array ? countryData : [countryData];
      setCountry(countryArray);
    };

    fetchCountryData();
  }, [name]);

  return (
    <div className="p-4 md:p-20 mt-16 w-full h-full text-white">
      <div className="inline-flex items-center mb-8 md:mb-12 ml-4  md:ml-6 w-28 md:w-32 h-12 md:h-10 rounded bg-header shadow-black">
        <Link to="/">
          <p className="inline-flex items-center mt-1 md:mt-0 ml-2 md:ml-6">
            <MoveLeft className="mr-2 md:mr-3" />
            Back
          </p>
        </Link>
      </div>
      {country.map((countryData) => (
        <div key={countryData.name.common} className="flex flex-col md:flex-row">
          <div className=" md:border-b md:border-borda md:border-borda-width md:rounded">
            <article>
              <div className="">
                <img
                  src={countryData.flags.svg}
                  alt={`Bandeira ${countryData.name.common}`}
                  className="w-full h-auto md:h-450 block "
                />
              </div>
            </article>
          </div>
          <div className="md:w-1/2 ml-0 md:ml-32 p-4 md:p-16">
            <h2 className="text-xl md:text-2xl font-bold mb-2">{countryData.name.common}</h2>
            <div className="mt-4 text-sm md:text-xs">
              <div className="mt-4">
                <p><strong>Native Name: </strong>{countryData.name.official}</p>
              </div>
              <div className="mt-4">
                <p><strong>Population: </strong>{countryData.population}</p>
              </div>
              <div className="mt-4">
                <p><strong>Region: </strong>{countryData.region}</p>
              </div>
              <div className="mt-4">
                <p><strong>Sub Region: </strong>{countryData.subregion}</p>
              </div>
              <div className="mt-4">
                <p><strong>Capital: </strong>{countryData.capital}</p>
              </div>
              
              <div className="mt-8 md:mt-32">
                <p className="font-bold">Border Countries:</p>
                {countryData.borders?.length > 0 ? (
                  <ul className="flex flex-wrap ml-0 md:ml-32 mt-3 md:-mt-5">
                    {countryData.borders.map((borderCountry) => (
                      <li key={borderCountry} className="mr-2 md:mr-4 mb-2 px-2 py-1 border border-gray-400 rounded">
                        {borderCountry}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Nothing</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Country;
