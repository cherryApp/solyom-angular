import { FieldBase } from './field-base';

export class InputField extends FieldBase<string | number> {
  controlType = 'input';
  type: string;

  constructor(options: InputField) {
    super(options);
    this.type = options.type || 'text';
  }
}
