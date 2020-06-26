import { FieldBase } from './field-base';

export class TextareaField extends FieldBase<string> {
  controlType = 'textarea';

  constructor(options: TextareaField) {
    super(options);
  }
}
