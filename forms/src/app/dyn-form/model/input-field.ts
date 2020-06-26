import { FieldBase } from './field-base';

export class InputField extends FieldBase<string | number> {
  type?: string;

  constructor(options: InputField) {
    super(options);
    this.type = options.type || 'text';
    this.controlType = 'input';
  }
}
