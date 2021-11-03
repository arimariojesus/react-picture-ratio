import React from 'react';

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
});
