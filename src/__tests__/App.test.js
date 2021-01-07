import { render } from '@testing-library/react';
import App from '../App';

describe('Render App Component', () => {
  it('renders learn react link', () => {
    const {getByText}=render(<App />);
    const linkElement = getByText(/espace/i);
    expect(linkElement).toBeTruthy();
  });
});