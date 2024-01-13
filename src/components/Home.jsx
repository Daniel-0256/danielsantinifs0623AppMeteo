import React, { useState, useEffect } from "react";
import "../CSS/Style.css";
import Dettagli from "./Dettagli";
import Header from "./Header";
import DettagliHeader from "./DettagliHeader";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (searchValue !== "") {
          const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchValue}?&key=HTGMVQ4MGW4SF4CU6KS6ZG37K`
          );

          if (response.ok) {
            const data = await response.json();
            setWeatherData(data);
            setLoading(false);
          } else {
            alert("errore di caricamento");
          }
        }
      } catch (error) {
        console.log("Errore:", error);
      }
    };

    fetchWeatherData();
  }, [searchValue]);

  return (
    <>
      <div id="body">
        <Header setSearchValue={setSearchValue} />
        {!loading ? (
          <>
            <DettagliHeader gradi={weatherData.days[0].temp}
            condizione={weatherData.days[0].conditions}
            gradiMax={weatherData.days[0].tempmax}
            gradiMin={weatherData.days[0].tempmin} />
            <Dettagli
              vento={weatherData.days[0].windspeed}
              gradi={weatherData.days[0].temp}
              pioggia={weatherData.days[0].precipprob}
              umidita={weatherData.days[0].humidity}
            />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Home;
