import { render, screen } from '@testing-library/react';
import Identicon from './Identicon';

describe('Identicon', () => {
  const value = 'test';
  const hash = 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3';

  test('renders an img for the default png format', () => {
    render(<Identicon value={value} />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining('data:image/png;base64,'));
  });

  test('renders an svg element when format is svg', () => {
    const { container } = render(<Identicon value={value} options={{ format: 'svg' }} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  test('uses the hash prop correctly', () => {
    render(<Identicon hash={hash} />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining('data:image/png;base64,'));
  });

  test('applies the size option correctly', () => {
    const size = 128;
    render(<Identicon value={value} options={{ size }} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('width', size.toString());
    expect(img).toHaveAttribute('height', size.toString());
  });

  test('updates the identicon when the value prop changes', () => {
    const { rerender } = render(<Identicon value="test1" />);
    const initialImg = screen.getByRole('img');
    const initialSrc = initialImg.getAttribute('src');

    rerender(<Identicon value="test2" />);
    const updatedImg = screen.getByRole('img');
    const updatedSrc = updatedImg.getAttribute('src');

    expect(initialSrc).not.toBe(updatedSrc);
  });
});
