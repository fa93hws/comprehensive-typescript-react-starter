import { ValidationController } from '../../../components/base/validation/validation-controller';
import { Validation } from '../../../components/base/validation/validation';

const MIN_LENGTH = 6;
const MAX_LENGTH = 10;

const minLenValidateFn = (val: string): Validation.Result<string> => (
  val.length > MIN_LENGTH
    ? Validation.createValid()
    : Validation.createInvalid(`Password must be at least ${MIN_LENGTH} characters long!`)
);
const maxLenValidateFn = (val: string): Validation.Result<string> => (
  val.length < MAX_LENGTH
    ? Validation.createValid()
    : Validation.createInvalid(`Password must not be longer than ${MAX_LENGTH} characters`)
);

export function createPasswordValidationController() {
  return new ValidationController([
    minLenValidateFn,
    maxLenValidateFn,
  ]);
}

export function createPasswordConfirmationValidationController(getPassword: () => string) {
  const samePasswordValidateFn = (val: string): Validation.Result<string> => (
    val === getPassword()
      ? Validation.createValid()
      : Validation.createInvalid('It should be same as your password')
  );
  return new ValidationController([
    minLenValidateFn,
    maxLenValidateFn,
    samePasswordValidateFn,
  ]);
}
