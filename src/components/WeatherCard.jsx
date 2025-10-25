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
 <div className='flex flex-row gap-6 justify-center items-center mt-5'>
    <div className='grid grid-cols-1 items-start p-2 bg-white rounded-lg shadow-lg w-72 h-96 transition-all duration-300 hover:scale-105'>
      <h2 className='text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold'>Current Weather
        <GithubCard/>
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
    </div>
  );
}

export default WeatherCard;
