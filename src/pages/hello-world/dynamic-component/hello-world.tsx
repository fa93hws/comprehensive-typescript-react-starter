import { observer } from 'mobx-react';
import * as React from 'react';
import styles from './hello-world.css';
import testStyles from './test.css';
import { HelloWorldStore, HelloWorldPresenter } from './hello-world-presenter';

export namespace Internal {
  export const HelloWorld = React.memo(({
    onClick,
    BottomSlot,
  }: {
    onClick(): void;
    BottomSlot: React.ComponentType | undefined;
  }) => (
    <div className={styles.header}>
      <h1 className={testStyles.footer}>
        Hello world!
      </h1>
      <button onClick={onClick}>
        Load dynamic chunk
      </button>
      {BottomSlot && <BottomSlot/>}
    </div>
  ));

  HelloWorld.displayName = 'hello-world-component';
}

export function createHelloWorldComponent() {
  const store = new HelloWorldStore();
  const onClick = () => HelloWorldPresenter.loadComponent(store);

  return observer(() => (
    <Internal.HelloWorld
      onClick={onClick}
      BottomSlot={store.BottomComponent}
    />
  ));
}
