import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a welcome paragraph', () => {
    render(<Home />);

    const paragraph = screen.getByTestId('welcome');

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(/Welcome home/i);
  });
});
