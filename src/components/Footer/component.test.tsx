import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './component';

describe('Footer', () => {
  it('renders a footer', () => {
    render(<Footer />);

    const footer = screen.getByTestId('footer');

    expect(footer).toBeDefined();
  });
});
