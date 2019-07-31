import * as React from 'react';
import { createValidationField } from '../../../components/form/validation-field/create-validated-field';
import { FieldStore } from '../../../components/form/validation-field/validation-field-presenter';
import {
  createPasswordValidationController,
  createPasswordConfirmationValidationController,
} from './validation-controllers';
import { HelloWorldForm } from './hello-world-form';

function createPasswordField(getDoValidatePasswordConfirmation: () => () => void) {
  const validationController = createPasswordValidationController();

  return createValidationField({
    validationController,
    type: 'text',
    title: 'password',
    onChange: () => getDoValidatePasswordConfirmation()(),
  });
}

function createPasswordConfirmationField(passwordFieldStore: FieldStore) {
  const validationController = createPasswordConfirmationValidationController(
    () => passwordFieldStore.value,
  );

  return createValidationField({
    validationController,
    type: 'text',
    title: 'confirm password',
  });
}

export function createForm() {
  let doValidatePasswordConfirmation: (() => void);
  const { Field: PasswordField, store: passwordFieldStore } = createPasswordField(
    () => doValidatePasswordConfirmation,
  );
  const {
    Field: PasswordConfirmationField,
    doValidate,
  } = createPasswordConfirmationField(passwordFieldStore);
  doValidatePasswordConfirmation = doValidate;

  return () => (
    <HelloWorldForm
      PasswordConfirmationField={PasswordConfirmationField}
      PasswordField={PasswordField}
    />
  );
}
