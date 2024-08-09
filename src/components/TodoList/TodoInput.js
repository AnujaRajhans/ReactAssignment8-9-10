import React from 'react';

const TodoInput = ({ value, onChange, onAdd }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
