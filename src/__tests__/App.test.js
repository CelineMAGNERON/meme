import { render } from '@testing-library/react';
import App from '../App';
import MemeGenerated from '../components/MemeGenerated';

describe('Render App Component', () => {
  it('renders learn react link', () => {
    const {getByText}=render(<App />);
    const linkElement = getByText(/espace/i);
    expect(linkElement).toBeTruthy();
  });

 });

// Fails :
// const mockCallback = jest.fn();
// MemeGenerated(mockCallback.div);
//
// it('Martine revient de vacances', () => {
// expect(MemeGenerated).toBeCalled();
// });
