import * as React from 'react';
import { createHelloWorldComponent } from './dynamic-component/hello-world';
import { createForm } from './form/create';

export function createPage() {
  const HW = createHelloWorldComponent();
  const Form = createForm();
  return () => (
    <div>
      <HW/>
      <Form/>
    </div>
  );
}
