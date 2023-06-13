"use strict";
import React, { useRef, useState } from "react";
import axios from "axios";

const WeatherCard = () => {
  
  //Currency logic start here

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTempretaure] = useState("");
  const [weather, setWeather] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      
    const apiUrl = `http://localhost:8080/tools/weather/${location}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const city = response.data.location.name;
        const country = response.data.location.country;
        const temperature = response.data.current.temperature;
        const weather = response.data.current.weather_descriptions[0].weather;
        setCity(city);
        setCountry(country);
        setTempretaure(temperature);
        setWeather(weather);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      className="relative flex h-96 w-52 lg:h-90 lg:w-80 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#080808] to-[#040404] px-8 py-16 shadow-sm shadow-[#ee2400]"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
      />
      <div className="flex flex-col align-baseline justify-between w-full text-center">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center pb-2 text-[#ee2400]">Weather Check</h2>

          <input
            className="Input text-black text-center appearance-none mb-4 w-full"
            type="text"
            required={true}
            placeholder="Enter City Name"
            onChange={handleLocationChange}
          />
            <p>City</p>
            <input
                      className="Input text-black text-center appearance-none mb-4 w-full sm:text-base"
                      title={ city}
              type="text"
              readOnly
              value={city}
            />
            <p>Country</p>
            <input
              className="Input text-black text-center appearance-none mb-4 w-full"
              type="text"
              readOnly
                      value={ country }
                      title={country}
            />
            <p>Temperature</p>
            <input
              className="Input text-black text-center appearance-none mb-4 w-full"
                          type="number"
                          step={0.001}
              readOnly
                      value={ temperature }
                      title={ temperature }
            />
            <p>Weather</p>
            <input
              className="Input text-black text-center appearance-none mb-4 w-full"
              type="text"
              readOnly
                      value={ weather }
                      title={weather}
            />

          <div className="flex justify-center">
            <button
              type="submit"
                          className=" mx-auto mt-1 mb-2 p-1 pl-2 pr-2 border border-[#ee2400] hover:bg-[#ee2400]"
                          onChange={setLocation}
            >
              Check Weather
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WeatherCard;
