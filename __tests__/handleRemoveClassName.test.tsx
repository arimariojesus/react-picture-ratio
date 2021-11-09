import React from 'react';
import { render, screen } from '@testing-library/react';
import { handleRemoveClassName } from '../src/utils/handleRemoveClassName';

describe('handleRemoveClassName', () => {
  it('should render div element and remove className', () => {
    const className = 'react-picture-ratio';
    const { container } = render(
      <div className={className} data-testid={className} />,
    );

    expect(container).toBeInTheDocument();

    const element = screen.getByTestId(className);
    expect(element).toHaveClass(className);

    handleRemoveClassName(element, className);
    expect(element).not.toHaveClass(className);
  });

  it('should returns null and not remove className', () => {
    const className = 'react-picture-ratio';
    const { container } = render(
      <div className={className} data-testid={className} />,
    );

    expect(container).toBeInTheDocument();

    const element = screen.getByTestId(className);
    expect(element).toHaveClass(className);

    const functionReturn = handleRemoveClassName(null, className);

    expect(functionReturn).toBe(null);
    expect(element).toHaveClass(className);
  });
});
