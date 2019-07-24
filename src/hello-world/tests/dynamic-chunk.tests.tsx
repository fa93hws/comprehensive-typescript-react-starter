import * as React from 'react';
import { DynamicComponent } from '../dynamic-chunk';

describe('DynamicComponent', () => {
  it('should match snapshot', () => {
    expect(<DynamicComponent/>).toMatchRenderedSnapshot();
  });
});
