import * as React from 'react';
import styles from './hello-world-form.css';

interface HelloWorldFormProps {
  PasswordField: React.ComponentType;
  PasswordConfirmationField: React.ComponentType;
}

export const HelloWorldForm = (props: HelloWorldFormProps) => (
  <form className={styles.form}>
    <props.PasswordField/>
    <props.PasswordConfirmationField/>
  </form>
);
