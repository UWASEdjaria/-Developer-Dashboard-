import { useState, useEffect } from "react";

export default function useWeather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("https://api.weatherapi.com/v1/current.json?key=b7595f12bed14082815191136252510&q=Kigali&aqi=no")
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(err => console.log(err));
  }, []);

  return weather;
}
