import { action, observable } from 'mobx';

export class FieldStore {
  @observable.ref
  public value: string = '';

  @observable.ref
  public errorMessage: string | null = null;
}

export class FieldPresenter {
  @action
  public static setValue(store: FieldStore, val: string) {
    store.value = val;
  }

  @action
  public static setError(store: FieldStore, errorMessage: string | null) {
    store.errorMessage = errorMessage;
  }

  public static hasError(store: FieldStore) {
    return store.errorMessage != null;
  }
}
