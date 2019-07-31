import { FieldStore, FieldPresenter } from '../validation-field-presenter';

describe('FieldPresenter', () => {
  let store: FieldStore;

  beforeEach(() => {
    store = new FieldStore();
  });

  it('has empty string as value by default', () => {
    expect(store.value).toBe('');
  });

  it('has no error by default', () => {
    expect(store.errorMessage).toBeNull();
  });

  it('set the value', () => {
    FieldPresenter.setValue(store, 'that value');
    expect(store.value).toBe('that value');
  });

  it('set the error message', () => {
    FieldPresenter.setError(store, 'that error');
    expect(store.errorMessage).toBe('that error');
  });

  it('has no error if error is null', () => {
    expect(FieldPresenter.hasError(store)).toBe(false);
  });

  it('has error if error is not null', () => {
    store.errorMessage = 'that error';
    expect(FieldPresenter.hasError(store)).toBe(true);
  });
});
