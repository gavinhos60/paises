import React from "react";
import { useNavigate } from "react-router";

const Filtro = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue !== "") {
      navigate(`/Continents/${selectedValue}`);
    } 
  };

  // Utilize useEffect caso você precise executar algo ao montar ou desmontar o componente.
  // Se não precisar, você pode simplesmente remover o useEffect.

  return (
    <div>
      <select
        className="bg-header text-xs h-12 ml-6 text-center w-48 text-white rounded"
        onChange={handleSelectChange}
      >
        <option value="">Filter By Region</option>
        <option value="America">America</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filtro;
