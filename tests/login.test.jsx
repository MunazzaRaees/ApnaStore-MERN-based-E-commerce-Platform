// login.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../src/Login';
import '@testing-library/jest-dom';
//describing the testing strategies for login
describe('Login Component', () => {
  test('renders title correctly', () => {
    render(<Login title="User Login" onSubmit={jest.fn()} />);
    const titleElement = screen.getByRole('heading', { name: /User Login/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('displays form fields', () => {
    render(<Login title="User Login" onSubmit={jest.fn()} />);
    
    const emailField = screen.getByLabelText(/email/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /login/i });

    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('shows a fallback message when fields are not filled', () => {
    render(<Login title="User Login" onSubmit={jest.fn()} />);
    
    const submitButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(submitButton);
    
    const errorMessage = screen.getByText(/please fill in all fields/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('calls onSubmit with form data when all fields are filled', () => {
    const mockOnSubmit = jest.fn();
    render(<Login title="User Login" onSubmit={mockOnSubmit} />);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'johni@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    
    const submitButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(submitButton);
    
    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: 'johni@example.com',
      password: 'password123',
    });
  });
});
