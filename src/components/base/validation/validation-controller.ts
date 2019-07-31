import { Validation } from './validation';

export class ValidationController<E> {
  private readonly validateFns: readonly ((val: string) => Validation.Result<E>)[];

  private shouldValidate = false;

  public constructor(validateFns: readonly ((val: string) => Validation.Result<E>)[]) {
    this.validateFns = validateFns;
  }

  public startValidate() {
    this.shouldValidate = true;
  }

  public getNormalizedError(value: string): E | null {
    if (!this.shouldValidate) {
      return null;
    }
    const validateResults = this.validateFns.map(fn => fn(value));
    const errors = Validation.filterError(validateResults);

    if (errors.length === 0) {
      return null;
    }
    return errors[0];
  }
}
