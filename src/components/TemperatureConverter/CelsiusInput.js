import React from 'react';

const CelsiusInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Celsius:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default CelsiusInput;
