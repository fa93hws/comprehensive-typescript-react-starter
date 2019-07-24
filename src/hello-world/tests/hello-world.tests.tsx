import * as React from 'react';
import { Internal } from '../hello-world';

describe('HelloWorld', () => {
  const { HelloWorld } = Internal;
  it('should render correctly without the dynamic chunk', () => {
    expect(<HelloWorld onClick={jest.fn()} BottomSlot={undefined}/>).toMatchRenderedSnapshot();
  });

  it('should render correctly with the dynamic chunk', () => {
    const DynamicComponent = () => <div>I&apos;m dynamic</div>;
    expect(
      <HelloWorld
        onClick={jest.fn()}
        BottomSlot={DynamicComponent}
      />,
    ).toMatchRenderedSnapshot();
  });
});
