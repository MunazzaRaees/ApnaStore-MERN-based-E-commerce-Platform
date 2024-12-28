// Product.js
import React from 'react';

const Product = ({ name, description, price, onAddToCart }) => {
  return (
    <div>
      <h1>{name || 'No product name available'}</h1>
      <p>{description || 'No description available'}</p>
      <p>{price ? `$${price}` : 'Price not available'}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
