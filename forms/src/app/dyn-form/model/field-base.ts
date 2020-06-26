import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';

export class FieldBase<T> {
  value: T;
  key: string;
  label: string;
  validators?: ValidatorFn | ValidatorFn[];
  asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[];
  controlType?: string;
  errorMessage?: string;

  constructor(options: FieldBase<T>) {
    for (const k of Object.keys(options)) {
      this[k] = options[k];
    }
  }
}
