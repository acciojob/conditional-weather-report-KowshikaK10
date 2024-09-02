import React from 'react'

const WeatherDisplay = (weather) => {
    const { temperature, conditions } = weather;
  
    const temperatureStyle = {
      color: temperature > 20 ? 'red' : 'blue',
    };
  
    return (
      <div>
        <h2>Current Weather</h2>
        <p>Temperature: <span style={temperatureStyle}>{temperature}</span></p>
        <p>Conditions: {conditions}</p>
      </div>
    );
}

export default WeatherDisplay
