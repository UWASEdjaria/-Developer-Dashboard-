import React, { useEffect, useState } from "react";

function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    // Fetch weather data
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=b7595f12bed14082815191136252510&q=Kigali&aqi=no"
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setTime(data.location.localtime);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      if (weather) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        setTime(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [weather]);

  if (!weather) return <p className="text-center mt-4 font-semibold">Loading weather...</p>;

  return (
    <div className="flex justify-center font-sans">
      <div className="bg-white text-black shadow-lg rounded-lg p-5 w-80 h-96 text-center">
        <h2 className="text-2xl font-bold mb-2 ">Current Weather</h2>
        <p className="font-semibold mb-2">
          {weather.location.name}, {weather.location.country}
        </p>
        <p className="mb-2">Local Time: {time}</p>
        <img
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
          className="mx-auto mb-2 w-20 h-20"
        />
        <p className="text-2xl font-bold mt-2">{weather.current.temp_c}°C</p>
        <p className="mb-2">{weather.current.condition.text}</p>
        <p>Wind: {weather.current.wind_kph} kph</p>
      </div>
    </div>
  );
}

export default WeatherCard;
