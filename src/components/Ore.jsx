import React from "react";
import "../CSS/StyleOre.css";

function convertFahrenheitToCelsius(fahrenheit) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius.toFixed(2);
  }

const Ore = ({ weatherData }) => {
  return (
    <div className="d-flex">
        <div id="oreRow" className="row d-flex flex-column">
          {weatherData.days[0].hours.map((hour, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4 m-2 text-center ">
              <div className="cardOre p-3">
                <div className="card-body d-flex">
                  <h5 className="card-title">{hour.datetime}</h5>
                  <p className="card-text">Gradi:{convertFahrenheitToCelsius(hour.temp)} °C</p>
                  <p className="card-text">Pioggia: {hour.precip}</p>
                  <p className="card-text">Condizione: {hour.conditions}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Ore;

