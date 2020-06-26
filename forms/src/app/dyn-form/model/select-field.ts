import { FieldBase } from './field-base';

export class SelectField extends FieldBase<string> {
  controlType = 'select';
  options: {value: string, title: string}[];

  constructor(options: SelectField) {
    super(options);
    this.options = options.options || [];
  }
}
