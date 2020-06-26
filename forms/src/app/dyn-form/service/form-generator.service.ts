import { Injectable } from '@angular/core';
import { FieldBase } from '../model/field-base';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {

  constructor() { }

  toFormGroup(fieldList: FieldBase<any>[]): FormGroup {
    const group = {};

    if (fieldList) {
      fieldList.forEach( item => {
        group[item.key] = new FormControl(
          item.value || '',
          item.validators || null,
          item.asyncValidators || null,
        );
      });
    }

    return new FormGroup(group);
  }
}
