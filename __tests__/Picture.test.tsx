import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Picture from '../src/components/Picture';

describe('<Picture />', () => {
  it('should match snapshot', () => {
    const component = renderer.create(
      <Picture src="https://via.placeholder.com/768x432" alt="Placeholder" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to show the picture tag and img tag', () => {
    render(
      <Picture src="https://via.placeholder.com/768x432" alt="Placeholder" />,
    );

    const pictureElement = screen.getByAltText(/Placeholder/i).parentElement;
    expect(pictureElement).toBeInTheDocument();

    const imgElement = screen.getByAltText(/Placeholder/i);
    expect(imgElement).toBeInTheDocument();
  });

  it('picture tag and img tag should have correct className', () => {
    render(
      <Picture src="https://via.placeholder.com/768x432" alt="Placeholder" />,
    );
    const pictureElement = screen.getByAltText(/Placeholder/i).parentElement;
    const imgElement = screen.getByAltText(/Placeholder/i);

    expect(pictureElement).toHaveClass('ratioBox');
    expect(imgElement).toHaveClass('image');
  });

  it('should have shimmer animation', () => {
    render(
      <Picture src="https://via.placeholder.com/768x432" alt="Placeholder" />,
    );
    const pictureElement = screen.getByAltText(/Placeholder/i).parentElement;

    expect(pictureElement).toHaveClass('shimmerEffect');
  });
});
