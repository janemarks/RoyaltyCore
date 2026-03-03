// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RoyaltyCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RoyaltyCore/i);
    expect(titleElement).toBeInTheDocument();
});
