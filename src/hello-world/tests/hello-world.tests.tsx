import * as React from 'react';
import { HelloWorld } from '../hello-world';

describe('HelloWorld', () => {
  it('should render correctly without the dynamic chunk', () => {
    (expect(<HelloWorld/>) as any).toMatchRenderedSnapshot();
  });

  it('should render correctly with the dynamic chunk', () => {
    const DynamicComponent = () => <div>I'm dynamic</div>;
    expect(<HelloWorld InitialDynamicComponent={DynamicComponent}/>).toMatchRenderedSnapshot();
  });
});
