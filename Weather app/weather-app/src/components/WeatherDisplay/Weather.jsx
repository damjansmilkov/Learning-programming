import React, { useState } from "react";
import axios from "axios";
import Card from "../StyledParts/card";
import Button from "../StyledParts/button";
const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const apiKey = "89c8b63b4c61ac5b0d189eb52746aff2"; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather(null); // Handle error state
    }
  };

  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh", // Full viewport height
        backgroundColor: "#f4f4f4", // Optional: Light background for contrast
      }}>
    <Card>
      <h1>Weather App</h1>
      <input style={{ padding: "5px 10px"}}
      
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button onClick={fetchWeather}>Get Weather</Button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </Card>
    </div>
  );
};

export default Weather;