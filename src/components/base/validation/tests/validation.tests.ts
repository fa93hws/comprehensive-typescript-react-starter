import { Validation } from '../validation';

describe('Validation', () => {
  it('creates valid state', () => {
    expect(Validation.createValid()).toEqual({ state: 'valid' });
  });

  it('creates empty invalid state', () => {
    expect(Validation.createInvalid()).toEqual({ state: 'invalid', error: true });
  });

  it('creates non-empty invalid state', () => {
    expect(Validation.createInvalid('error')).toEqual({ state: 'invalid', error: 'error' });
  });
});

describe('Validation:filterError', () => {
  it('returns empty if there is no error', () => {
    const errors = [
      Validation.createValid(),
      Validation.createValid(),
      Validation.createValid(),
    ];
    expect(Validation.filterError(errors)).toHaveLength(0);
  });

  it('returns correct errors', () => {
    const errors = [
      Validation.createValid(),
      Validation.createInvalid('error 1'),
      Validation.createValid(),
      Validation.createValid(),
      Validation.createInvalid('error 2'),
    ];
    expect(Validation.filterError(errors)).toEqual([
      'error 1',
      'error 2',
    ]);
  });
});
