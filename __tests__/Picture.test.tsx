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

    const pictureElement = screen.getByTestId('react-picture-ratio');
    expect(pictureElement).toBeInTheDocument();

    const imgElement = screen.getByAltText('Placeholder');
    expect(imgElement).toBeInTheDocument();
  });

  it('picture tag and img tag should have correct className', () => {
    render(
      <Picture src="https://via.placeholder.com/768x432" alt="Placeholder" />,
    );
    const picture = screen.getByTestId('react-picture-ratio');
    const image = picture.firstChild;

    expect(picture).toHaveClass('ratioBox');
    expect(image).toHaveClass('image');
  });

  it('should have shimmer animation', () => {
    render(
      <Picture src="https://via.placeholder.com/768x432" alt="Placeholder" />,
    );
    const picture = screen.getByTestId('react-picture-ratio');

    expect(picture).toHaveClass('shimmerEffect');
  });
});
