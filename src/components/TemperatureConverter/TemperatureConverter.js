import React, { useState } from 'react';
import CelsiusInput from './CelsiusInput';
import FahrenheitInput from './FahrenheitInput';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (value) => {
    setCelsius(value);
    setFahrenheit((value * 9/5) + 32);
  };

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    setCelsius((value - 32) * 5/9);
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <CelsiusInput value={celsius} onChange={handleCelsiusChange} />
      <FahrenheitInput value={fahrenheit} onChange={handleFahrenheitChange} />
    </div>
  );
};

export default TemperatureConverter;
