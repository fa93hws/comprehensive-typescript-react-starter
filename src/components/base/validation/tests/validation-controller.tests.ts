import { ValidationController } from '../validation-controller';
import { Validation } from '../validation';

function fn0(str: string): Validation.Result<string> {
  return str === 'yes'
    ? { state: 'valid' }
    : { state: 'invalid', error: 'it should be yes' };
}

function fn1(str: string): Validation.Result<string> {
  return str.length > 0
    ? { state: 'valid' }
    : { state: 'invalid', error: 'it should be longer than 0' };
}

function fn2(str: string): Validation.Result<string> {
  return str.length < 4
    ? { state: 'valid' }
    : { state: 'invalid', error: 'it should be shorter than 4' };
}

describe('ValidationController', () => {
  let controller: ValidationController<string>;

  beforeEach(() => {
    controller = new ValidationController([fn0, fn1, fn2]);
  });

  it('does not return error if not started', () => {
    expect(controller.getNormalizedError('')).toBeNull();
  });

  it('reports the first error only', () => {
    controller.startValidate();
    expect(controller.getNormalizedError('')).toBe('it should be yes');
  });

  it('reports nothing if correct', () => {
    controller.startValidate();
    expect(controller.getNormalizedError('yes')).toBeNull();
  });
});
