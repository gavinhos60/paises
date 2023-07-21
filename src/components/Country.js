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
      console.log(country);
    };
    fetchCountryData();
  });
  return (
    <div className="p-20 mt-16 w-full h-full text-white">
      <div className="inline-flex items-center mb-12 ml-6 w-32  h-10 rounded bg-header shadow-black">
        <Link to="/">
          <p className="inline-flex items-center mt-1 ml-6">
            <MoveLeft className="mr-3" />
            Back
          </p>
        </Link>
      </div>
      {country.map((country) => (
        <div class="w-450 h-450 border-borda border-borda-width rounded">
          <article key={country.name.common}>
            <div className="">
              <img
                src={country.flags.svg}
                alt={`Bandeira ${country.name.common}`}
                className="w-full h-auto block "
              />
            </div>
          </article>
        </div>        
      ))}
    </div>
  );
};

export default Country;
