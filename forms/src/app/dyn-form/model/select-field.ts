import { FieldBase } from './field-base';

export class SelectField extends FieldBase<string> {
  options: {value: string, title: string}[];

  constructor(options: SelectField) {
    super(options);
    this.options = options.options || [];
    this.controlType = 'select';
  }
}
