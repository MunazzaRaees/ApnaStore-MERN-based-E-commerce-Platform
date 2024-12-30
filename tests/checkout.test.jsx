
// checkout.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkout from '../src/Checkout';
import '@testing-library/jest-dom';

describe('Checkout Component', () => {
  test('renders title correctly', () => {
    render(<Checkout title="Shopping Cart" items={[]} total={0} />);
    const titleElement = screen.getByRole('heading', { name: /Shopping Cart/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders empty cart message when no items are passed', () => {
    render(<Checkout title="Shopping Cart" items={[]} total={0} />);
    const emptyCartMessage = screen.getByText(/No items in your cart/i);
    expect(emptyCartMessage).toBeInTheDocument();
  });
//renders item correctly
  test('renders items correctly when items are passed', () => {
    const items = [
      { name: "Item 1", price: 20 },
      { name: "Item 2", price: 35 },
    ];
    render(<Checkout title="Shopping Cart" items={items} total={55} />);
    const itemElements = screen.getAllByText(/Item/i);
    expect(itemElements).toHaveLength(2);
    expect(itemElements[0]).toHaveTextContent("Item 1 - $20");
    expect(itemElements[1]).toHaveTextContent("Item 2 - $35");
  });
// screen.getAllByText(/Item/i) might match unwanted text if there are other elements containing "Item."
  test('renders correct total price', () => {
    const items = [
      { name: "Item 1", price: 20 },
      { name: "Item 2", price: 35 },
    ];
    render(<Checkout title="Shopping Cart" items={items} total={55} />);
    const totalElement = screen.getByText(/Total: \$55/i);
    expect(totalElement).toBeInTheDocument();
  });

  test('renders default total when no items are passed', () => {
    render(<Checkout title="Shopping Cart" items={[]} total={0} />);
    const totalElement = screen.getByText(/Total: \$0/i);
    expect(totalElement).toBeInTheDocument();
  });
});
