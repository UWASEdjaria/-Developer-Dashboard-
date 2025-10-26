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
      <div className="bg-white text-black shadow-lg rounded-lg p-5 w-80 flex flex-col justify-between h-96">
        {/* Top content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Current Weather</h2>

          {/* Location */}
          <p className="font-semibold mb-5 p-5">
            {weather.location.name}, {weather.location.country}
          </p>

          {/* Icon + Temperature inline */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src={weather.current.condition.icon}
              
              className="w-16 h-16 sm:w-20 sm:h-20  m-2 "
            />
            <span className="text-4xl font-bold">{weather.current.temp_c}°C</span>
          </div>

          {/* Condition and Wind */}
          <div className="flex flex-col items-center">
           
            <p className="text-lg flex items-center gap-6">
              <span>Wind</span>
              <span className="font-bold">{weather.current.wind_kph} kph</span>
            </p>
          </div>
        </div>

        {/* Bottom content: Time */}
        <div className="text-center mt-4">
          <p className="text-lg flex items-center justify-center gap-6  mb-5">
            <span>Time</span>
            <span className="font-bold">{time}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
