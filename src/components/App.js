
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const[weatherData,setWeatherData]=useState({ temperature: 0, conditions: '' });
  useEffect(()=>{
    const weather={ temperature: 25, conditions: 'Sunny' };
    setWeatherData(weather)
  },[])
  return (
    <div>
        <h1>Weather App</h1>
        <WeatherDisplay weather={weatherData}/>      
    </div>
  )
}

export default App
