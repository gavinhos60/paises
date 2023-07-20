import React, { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Pesquisa = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);    
  };

  return (
    <div>      
      <div className=" bg-header rounded text-center flex items-center  w-450 h-12">
      <Link className="ml-3" to={`/countries/${searchTerm}`}>
          <button>
            <Search color="white" size={26} className=" ml-6 mr-2 mb-1" />
          </button>
        </Link>
        <input         
          type="text"         
          onChange={handleChange}
          className="bg-header w-full h-full ml-6  flex text-center text-white"
          placeholder="Search for a contry..."
        />
      </div>
    </div>
  );
};

export default Pesquisa;
