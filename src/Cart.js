import React, { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([]);
  
  const addItem = () => setItems([...items, `Item ${items.length + 1}`]);
  const removeItem = () => setItems(items.slice(0, -1));
  
  return (
    <div>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem} disabled={items.length === 0}>
        Remove Item
      </button>
    </div>
  );
};

export default Cart;
