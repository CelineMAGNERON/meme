import { render, screen } from '@testing-library/react';
import App from './App';

describe('Render App Component', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/espace/i);
    expect(linkElement).toBeInTheDocument();
  });
});