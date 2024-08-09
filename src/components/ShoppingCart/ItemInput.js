import React from 'react';

const ItemInput = ({ name, quantity, onNameChange, onQuantityChange, onAdd }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => onQuantityChange(e.target.value)}
      />
      <button onClick={onAdd}>Add Item</button>
    </div>
  );
};

export default ItemInput;
