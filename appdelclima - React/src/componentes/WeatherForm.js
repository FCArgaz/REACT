import { useState } from "react";

import Styles from "./WeatherForm.module.css";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function onChange(e) {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit} className={Styles.conteiner}>
      <input type="text" onChange={onChange} className={Styles.input} />
    </form>
  );
}
