// about.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../src/About';
import '@testing-library/jest-dom';

describe('About Component', () => {
  test('renders title correctly with props', () => {
    render(<About title="E-Commerce App" description="This is an e-commerce application" />);
    const titleElement = screen.getByRole('heading', { name: /E-Commerce App/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders description correctly with props', () => {
    render(<About title="E-Commerce App" description="This is an e-commerce application" />);
    const descriptionElement = screen.getByText(/This is an e-commerce application/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders without crashing when no props are passed', () => {
    render(<About />);
    const fallbackTitle = screen.getByText(/No title available/i);
    const fallbackDescription = screen.getByText(/No description available/i);
    expect(fallbackTitle).toBeInTheDocument();
    expect(fallbackDescription).toBeInTheDocument();
  });

  test('renders fallback message when description is missing', () => {
    render(<About title="E-Commerce App" />);
    const descriptionElement = screen.getByText(/No description available/i);
    expect(descriptionElement).toBeInTheDocument();
  });
});
