import * as React from 'react';
import { Internal } from '../hello-world';

describe('HelloWorld', () => {
  const { Component } = Internal;
  it('should render correctly without the dynamic chunk', () => {
    expect(<Component onClick={jest.fn()} BottomSlot={undefined}/>).toMatchRenderedSnapshot();
  });

  it('should render correctly with the dynamic chunk', () => {
    const DynamicComponent = () => <div>I'm dynamic</div>;
    expect(<Component onClick={jest.fn()} BottomSlot={DynamicComponent}/>).toMatchRenderedSnapshot();
  });
});
