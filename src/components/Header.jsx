import React from "react";
import { useState } from "react";
import "../CSS/StyleHeader.css";

const Header = ({ setSearchValue }) => {
  const [inputValue, setInputValue] = useState("");
  const data = new Date();
  const options = [
    {
      month: "long",
      year: "numeric",
    },
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  ];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchValue(inputValue);
  };

  return (
    <>
      <div id="nav">
        <div className="d-flex p-1 pe-5 ps-5 justify-content-between align-items-center">
          <h3 id="data">
            {data.toLocaleString(undefined, options[1])}
          </h3>
          <h1 id="città">{inputValue}</h1>
          <div className="d-flex">
            <input
              id="ricerca"
              className="border border-none"
              type="text"
              placeholder="Cerca una località!"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button onClick={handleSearch} id="cerca">
              Cerca
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Header;
