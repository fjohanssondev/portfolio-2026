import { useState, useEffect } from "react";

export function useMyBio() {
  const [info, setInfo] = useState({
    name: "Fredrik Johansson",
    age: 30,
    interests: ["Programming", "Skiing", "Disc Golf", "Soccer", "Formula 1"],
    yearsInIndustry: new Date().getFullYear() - 2022,
  });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      const res = await fetch("/api/weather");

      if (!res.ok) throw new Error("Couldn't fetch weather");

      const data = await res.json();

      setWeather(data);
    };

    getWeather();
  }, []);

  return {
    ...info,
    currentWeather: weather,
  };
}
