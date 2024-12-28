import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from '../src/Cart';


describe('Cart Component', () => {
  test('renders the cart with no items initially', () => {
    render(<Cart />);
    const emptyMessage = screen.getByText(/your cart is empty/i);
    expect(emptyMessage).toBeInTheDocument();
  });

  test('allows adding an item to the cart', () => {
    render(<Cart />);

    const addItemButton = screen.getByText(/add item/i);
    fireEvent.click(addItemButton);

    const cartItem = screen.getByText(/item 1/i);
    expect(cartItem).toBeInTheDocument();
  });

  test('allows removing an item from the cart', () => {
    render(<Cart />);

    const addItemButton = screen.getByText(/add item/i);
    fireEvent.click(addItemButton);

    const removeItemButton = screen.getByText(/remove item/i);
    fireEvent.click(removeItemButton);

    const emptyMessage = screen.getByText(/your cart is empty/i);
    expect(emptyMessage).toBeInTheDocument();
  });
});
