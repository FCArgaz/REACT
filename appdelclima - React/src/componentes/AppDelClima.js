import { useState, useEffect } from "react";
import WeatherMainInfo from "./WeatherMainInfo";
import WeatherForm from "./WeatherForm";

import Styles from "./AppDelClima.module.css"

export default function AppDelClima() {
  const [weather, setWeather] = useState(null);

  useEffect(()=> {
    loadInfo();
  }, []);

  useEffect(()=>{
    document.title = `weather | ${weather?.location.name ?? ""}`
  },[weather]);

  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();

      setWeather(json);

      console.log(json);

    } catch (error) {}
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={Styles.AppDelClimaConteiner}>
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather}/>
    </div>
  );
}
