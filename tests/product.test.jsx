// product.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Product from '../src/Product';
import '@testing-library/jest-dom';

describe('Product Component', () => {
  test('renders product name, description, and price correctly', () => {
    render(
      <Product 
        name="Product A" 
        description="This is a great product" 
        price={99.99} 
        onAddToCart={jest.fn()} 
      />
    );
    
    const nameElement = screen.getByRole('heading', { name: /Product A/i });
    const descriptionElement = screen.getByText(/This is a great product/i);
    const priceElement = screen.getByText(/\$99\.99/i);
    
    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  test('shows fallback message when no name is passed', () => {
    render(
      <Product 
        description="This is a great product" 
        price={99.99} 
        onAddToCart={jest.fn()} 
      />
    );

    const fallbackName = screen.getByRole('heading', { name: /No product name available/i });
    expect(fallbackName).toBeInTheDocument();
  });

  test('shows fallback message when no description is passed', () => {
    render(
      <Product 
        name="Product A" 
        price={99.99} 
        onAddToCart={jest.fn()} 
      />
    );

    const fallbackDescription = screen.getByText(/No description available/i);
    expect(fallbackDescription).toBeInTheDocument();
  });

  test('shows fallback message when no price is passed', () => {
    render(
      <Product 
        name="Product A" 
        description="This is a great product" 
        onAddToCart={jest.fn()} 
      />
    );

    const fallbackPrice = screen.getByText(/Price not available/i);
    expect(fallbackPrice).toBeInTheDocument();
  });

  test('calls onAddToCart when Add to Cart button is clicked', () => {
    const mockOnAddToCart = jest.fn();
    render(
      <Product 
        name="Product A" 
        description="This is a great product" 
        price={99.99} 
        onAddToCart={mockOnAddToCart} 
      />
    );

    const buttonElement = screen.getByRole('button', { name: /Add to Cart/i });
    fireEvent.click(buttonElement);

    expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
  });
});
