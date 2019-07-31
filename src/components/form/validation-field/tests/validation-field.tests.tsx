import * as React from 'react';
import { ValidationField } from '../validation-field';

describe('ValidationField', () => {
  it('should render correctly for empty value without error message', () => {
    expect(
      <ValidationField
        title="title"
        type="text"
        value=""
        errorMessage={null}
        onChange={jest.fn()}
      />,
    ).toMatchRenderedSnapshot();
  });

  it('should render correctly for empty value with error message', () => {
    expect(
      <ValidationField
        title="title"
        type="text"
        value=""
        errorMessage="there is an error"
        onChange={jest.fn()}
      />,
    ).toMatchRenderedSnapshot();
  });

  it('should render correctly for some value without error message', () => {
    expect(
      <ValidationField
        title="title"
        type="text"
        value="there is some value"
        errorMessage={null}
        onChange={jest.fn()}
      />,
    ).toMatchRenderedSnapshot();
  });

  it('should render correctly for some value with error message', () => {
    expect(
      <ValidationField
        title="title"
        type="text"
        value="there is some value"
        errorMessage="there is some errors"
        onChange={jest.fn()}
      />,
    ).toMatchRenderedSnapshot();
  });
});
