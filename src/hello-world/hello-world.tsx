import * as React from 'react';
import styles from './hello-world.css';
import testStyles from './test.css';

export const HelloWorld = ({
  InitialDynamicComponent,
}: {
  InitialDynamicComponent?: React.ComponentType
}) => {
  const [DynamicComponent, setDynamicComponent] = React.useState<React.ComponentType | undefined>(() => InitialDynamicComponent);

  const onClick = React.useCallback(async () => {
    const { DynamicComponent } = await import(/* webpackChunkName: "dynamic-chunk" */ './dynamic-chunk');
    setDynamicComponent(() => DynamicComponent);
  }, [setDynamicComponent]);

  return (
    <div className={styles.header}>
      <h1 className={testStyles.footer}>Hello world!</h1>
      <button onClick={onClick}>
        Load dynamic chunk
      </button>
      {DynamicComponent && <DynamicComponent/>}
    </div>
  )
};
