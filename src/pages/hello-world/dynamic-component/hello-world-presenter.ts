import { ComponentType } from 'react';
import { observable } from 'mobx';

export class HelloWorldStore {
  @observable.ref
  public BottomComponent?: ComponentType = undefined;
}

export class HelloWorldPresenter {
  public static async loadComponent(store: HelloWorldStore) {
    const { DynamicComponent } = await import('./dynamic-chunk');
    store.BottomComponent = DynamicComponent;
  }
}
