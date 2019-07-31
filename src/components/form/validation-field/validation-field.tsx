import * as cn from 'classnames';
import * as React from 'react';
import styles from './validation-field.css';

export type FieldType = 'text' | 'password';

interface ValidatedFieldProps {
  title: string;
  type: FieldType;
  value: string;
  errorMessage: string | null;
  onChange(val: React.ChangeEvent<HTMLInputElement>): void;
  onBlur?(): void;
}

export const ValidationField = (props: ValidatedFieldProps) => (
  <div>
    <h4>
      {props.title}
    </h4>
    <input
      type={props.type}
      value={props.value}
      onBlur={props.onBlur}
      onChange={props.onChange}
      className={cn({
        [styles.error]: props.errorMessage != null,
      })}
    />
    <p>
      {props.errorMessage}
    </p>
  </div>
);
