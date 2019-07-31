import {
  createPasswordValidationController,
  createPasswordConfirmationValidationController,
} from '../validation-controllers';

describe('PasswordValidationController', () => {
  const controller = createPasswordValidationController();
  controller.startValidate();

  it('invalid short password', () => {
    const pwd = new Array(6).fill('1').join('');
    const error = controller.getNormalizedError(pwd);
    expect(error).not.toBeNull();
    expect(error).toMatchSnapshot();
  });

  it('invalid long password', () => {
    const pwd = new Array(10).fill('1').join('');
    const error = controller.getNormalizedError(pwd);
    expect(error).not.toBeNull();
    expect(error).toMatchSnapshot();
  });

  it('valid correct length password', () => {
    const pwd = new Array(8).fill('1').join('');
    const error = controller.getNormalizedError(pwd);
    expect(error).toBeNull();
  });
});

describe('PasswordConfirmationValidationController', () => {
  const getPassword = () => 'password';
  const controller = createPasswordConfirmationValidationController(getPassword);
  controller.startValidate();

  it('invalid short password', () => {
    const pwd = new Array(6).fill('1').join('');
    const error = controller.getNormalizedError(pwd);
    expect(error).not.toBeNull();
    expect(error).toMatchSnapshot();
  });

  it('invalid long password', () => {
    const pwd = new Array(10).fill('1').join('');
    const error = controller.getNormalizedError(pwd);
    expect(error).not.toBeNull();
    expect(error).toMatchSnapshot();
  });

  it('invalid different password', () => {
    const pwd = new Array(8).fill('1').join('');
    const error = controller.getNormalizedError(pwd);
    expect(error).not.toBeNull();
    expect(error).toMatchSnapshot();
  });

  it('valid same password', () => {
    const pwd = 'password';
    const error = controller.getNormalizedError(pwd);
    expect(error).toBeNull();
  });
});
