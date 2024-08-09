import React from 'react';

const FahrenheitInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Fahrenheit:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
export default FahrenheitInput;
