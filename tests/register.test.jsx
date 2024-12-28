// register.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../src/Register';
import '@testing-library/jest-dom';

describe('Register Component', () => {
  test('renders title correctly', () => {
    render(<Register title="User Registration" onSubmit={jest.fn()} />);
    const titleElement = screen.getByRole('heading', { name: /User Registration/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('displays form fields', () => {
    render(<Register title="User Registration" onSubmit={jest.fn()} />);
    
    const nameField = screen.getByLabelText(/name/i);
    const emailField = screen.getByLabelText(/email/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /register/i });

    expect(nameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('shows a fallback message when fields are not filled', () => {
    render(<Register title="User Registration" onSubmit={jest.fn()} />);
    
    const submitButton = screen.getByRole('button', { name: /register/i });
    fireEvent.click(submitButton);
    
    const errorMessage = screen.getByText(/please fill in all fields/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('calls onSubmit with form data when all fields are filled', () => {
    const mockOnSubmit = jest.fn();
    render(<Register title="User Registration" onSubmit={mockOnSubmit} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    
    const submitButton = screen.getByRole('button', { name: /register/i });
    fireEvent.click(submitButton);
    
    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    });
  });
});
