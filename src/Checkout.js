// Checkout.js
import React from 'react';

const Checkout = ({ title = "Checkout", items = [], total = 0 }) => {
  return (
    <div>
      <h1>{title}</h1>
      {items.length === 0 ? (
        <p>No items in your cart</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default Checkout;
