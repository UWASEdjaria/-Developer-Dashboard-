import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from '../context/Themecontext';

function WeatherCard() {
  const { dark } = useContext(ThemeContext);
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

  if (!weather) return <p className="mt-4 font-semibold text-center">Loading weather...</p>;

  return (
    <div className="flex justify-center font-sans">
      <div className={`flex flex-col justify-between p-3 rounded-lg shadow-lg w-80 h-96 transition-colors duration-200 ${
        dark ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}>
      
        
          <h2 className="mb-2 text-2xl font-bold">Current Weather</h2>

         
          <p className="p-5 mb-5 font-semibold">
            {weather.location.name}, {weather.location.country}
          </p>

          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src={weather.current.condition.icon}
              
              className="w-16 h-16 m-2 sm:w-20 sm:h-20 "
            />
            <span className="text-4xl font-bold">{weather.current.temp_c}°C</span>
          </div>

          {/* Condition and Wind */}
          <div className="flex flex-col items-center">
           
            <p className="flex items-center gap-6 text-lg">
              <span>Wind</span>
              <span className="font-bold">{weather.current.wind_kph} kph</span>
            </p>
        
        </div>

        {/* Bottom content: Time */}
        <div className="mt-4 text-center">
          <p className="flex items-center justify-center gap-6 mb-5 text-lg">
            <span>Time</span>
            <span className="font-bold">{time}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
