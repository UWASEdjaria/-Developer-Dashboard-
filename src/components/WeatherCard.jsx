import React, { useEffect, useState } from "react";

function WeatherCard() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Kigali&aqi=no"
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  }, []);

  if (!weather) {
    return <p className="text-center mt-4 font-semibold">Loading weather...</p>;
  }

  return (
    <div className="bg-blue-200 shadow-lg rounded-lg p-4 w-60 text-center">
      <h2 className="text-lg font-bold">
        {weather.location.name}, {weather.location.country}
      </h2>
      <img
        src={weather.current.condition.icon}
        alt="Weather Icon"
        className="mx-auto"
      />
      <p className="text-2xl font-bold mt-2">{weather.current.temp_c}°C</p>
      <p>{weather.current.condition.text}</p>
    </div>
  );
}

export default WeatherCard;
