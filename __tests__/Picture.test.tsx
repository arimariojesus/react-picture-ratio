import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import React from 'react';
import Picture from '../src/components/Picture';

describe('<Picture />', () => {
  it('should match snapshot', () => {
    const component = renderer.create(
      <Picture src="https://via.placeholder.com/768x432" alt="Placeholder" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to show the picture element', () => {
    render(
      <Picture src="https://via.placeholder.com/768x432" alt="Placeholder" />,
    );

    const picture = screen.getByTestId('react-picture-ratio');
    expect(picture).toBeInTheDocument();
  });
});
