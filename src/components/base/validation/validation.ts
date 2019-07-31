export namespace Validation {
  export type Result<E> = {
    state: 'valid';
  } | {
    state: 'invalid';
    error: E;
  };

  export type Fn<T, E> = (val: T) => Result<E>;

  export const createValid = <E>(): Result<E> => ({ state: 'valid' });

  export function createInvalid(): Result<true>;
  export function createInvalid<E>(e: E): Result<E>;
  export function createInvalid<E>(e?: E): Result<E | true> {
    return e == null
      ? { state: 'invalid', error: true }
      : { state: 'invalid', error: e };
  }

  export function filterError<E>(results: readonly (Result<E>)[]) {
    return results.reduce<E[]>((acc, result) => {
      if (result.state === 'invalid') {
        acc.push(result.error);
      }
      return acc;
    }, []);
  }
}
