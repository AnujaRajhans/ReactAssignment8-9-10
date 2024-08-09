import React, { useState } from 'react';
import ItemInput from './ItemInput';
import CartItem from './CartItem';

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const addItem = () => {
    if (itemName.trim() && itemQuantity > 0) {
      setItems([...items, { name: itemName, quantity: itemQuantity }]);
      setItemName('');
      setItemQuantity('');
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ItemInput
        name={itemName}
        quantity={itemQuantity}
        onNameChange={setItemName}
        onQuantityChange={setItemQuantity}
        onAdd={addItem}
      />
      <ul>
        {items.map((item, index) => (
          <CartItem key={index} name={item.name} quantity={item.quantity} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
