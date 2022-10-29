import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './component';

describe('Header', () => {
  it('renders a header', () => {
    render(<Header />);

    const header = screen.getByTestId('header');

    expect(header).toBeDefined();
  });
});
