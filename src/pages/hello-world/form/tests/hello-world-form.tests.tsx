import * as React from 'react';
import { HelloWorldForm } from '../hello-world-form';

describe('HelloWorldForm', () => {
  it('should render correctly', () => {
    const PasswordField = () => <div>Password</div>;
    const PasswordConfirmation = () => <div>Password Confirmation</div>;
    expect(
      <HelloWorldForm
        PasswordField={PasswordField}
        PasswordConfirmationField={PasswordConfirmation}
      />,
    ).toMatchRenderedSnapshot();
  });
});
