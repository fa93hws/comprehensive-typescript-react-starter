import * as React from 'react';
import { observer } from 'mobx-react';
import { ValidationController } from '../../base/validation/validation-controller';
import { FieldStore, FieldPresenter } from './validation-field-presenter';
import { FieldType, ValidationField } from './validation-field';

interface ValidatedFieldConfig {
  title: string;
  validationController: ValidationController<string>;
  type: FieldType;
  onChange?(val: string): void;
}

export function createValidationField(config: ValidatedFieldConfig) {
  const store = new FieldStore();
  const doValidate = () => {
    const error = config.validationController.getNormalizedError(store.value);
    FieldPresenter.setError(store, error);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    FieldPresenter.setValue(store, val);
    doValidate();
    config.onChange && config.onChange(val);
  };
  const onBlur = () => {
    config.validationController.startValidate();
    doValidate();
  };

  const Field = observer(() => (
    <ValidationField
      onBlur={onBlur}
      type={config.type}
      onChange={onChange}
      value={store.value}
      title={config.title}
      errorMessage={store.errorMessage}
    />
  ));

  return {
    Field,
    store,
    doValidate,
  };
}
