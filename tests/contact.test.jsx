// contact.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../src/Contact';
import '@testing-library/jest-dom';

describe('Contact Component', () => {
  test('renders title correctly', () => {
    render(<Contact title="Contact Us" onSubmit={jest.fn()} />);
    const titleElement = screen.getByRole('heading', { name: /Contact Us/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('displays form fields', () => {
    render(<Contact title="Contact Us" onSubmit={jest.fn()} />);
    
    const nameField = screen.getByLabelText(/name/i);
    const emailField = screen.getByLabelText(/email/i);
    const messageField = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    expect(nameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(messageField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('shows a fallback message when fields are not filled', () => {
    render(<Contact title="Contact Us" onSubmit={jest.fn()} />);
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    
    const errorMessage = screen.getByText(/please fill in all fields/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('calls onSubmit with form data when all fields are filled', () => {
    const mockOnSubmit = jest.fn();
    render(<Contact title="Contact Us" onSubmit={mockOnSubmit} />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'This is a test message.' } });
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    
    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john.doe@example.com',
      message: 'This is a test message.',
    });
  });
});
