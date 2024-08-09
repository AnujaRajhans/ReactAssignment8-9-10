import React from 'react';

const CartItem = ({ name, quantity }) => {
  return (
    <li>
      {name} - {quantity}
    </li>
  );
};

export default CartItem;
