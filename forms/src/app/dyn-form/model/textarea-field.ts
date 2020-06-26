import { FieldBase } from './field-base';

export class TextareaField extends FieldBase<string> {
  constructor(options: TextareaField) {
    super(options);
    this.controlType = 'textarea';
  }
}
