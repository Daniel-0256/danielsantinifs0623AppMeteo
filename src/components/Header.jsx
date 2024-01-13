import React from "react";
import { useState } from "react";
import "../CSS/Style.css";

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
      <div id="" className="d-flex flex-column align-items-center text-center">
        <div>
          <h3 className="mb-sm-3">
            {data.toLocaleString(undefined, options[1])}
          </h3>
          <div className="d-flex justify-content-center ">
            <input
              id="ricerca"
              className="border border-none"
              type="text"
              placeholder="Cerca..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <button onClick={handleSearch} id="cerca">
              Cerca
            </button>
          </div>
          <h2>{inputValue}</h2>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Header;
