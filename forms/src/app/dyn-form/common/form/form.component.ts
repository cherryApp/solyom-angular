import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FieldBase } from '../../model/field-base';
import { FormGeneratorService } from '../../service/form-generator.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-solyom-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() fieldList: FieldBase<any>[];
  @Output() submitted: EventEmitter<any> = new EventEmitter();
  group: FormGroup;

  constructor(
    private generator: FormGeneratorService,
  ) { }

  ngOnInit(): void {
    this.group = this.generator.toFormGroup(this.fieldList);
  }

  onSubmit(): void {
    this.submitted.emit( this.group.value );
  }

}
