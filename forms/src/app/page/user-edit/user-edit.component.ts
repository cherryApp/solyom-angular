import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { Observable, combineLatest, of } from 'rxjs';
import { FormGroup, Validators, FormControl, AsyncValidatorFn, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { map, tap } from 'rxjs/operators';
import { InputField } from 'src/app/dyn-form/model/input-field';
import { SettingsService } from 'src/app/service/settings.service';
import { TextareaField } from 'src/app/dyn-form/model/textarea-field';
import { SelectField } from 'src/app/dyn-form/model/select-field';
import { send } from 'process';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user$: Observable<User> = null;
  id = 0;
  formGroup: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email], this.emailValidator.bind(this)),
    company: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  fieldList: any[] = [];

  constructor(
    private userService: UserService,
    private ar: ActivatedRoute,
    private settingsService: SettingsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params.id;
    this.user$ = combineLatest([
      this.userService.get(this.id),
      this.settingsService.get(),
    ]).pipe(
      tap((response: [User, any]) => {
        console.log(response);
        this.getFormGroup(response[1].userEditForm, response[0]);
      }),
      map( (response: [User, any]) => response[0] )
    );
  }

  emailValidator(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.userService.checkEmail(ctrl.value, this.id);
  }

  onSave(user: User): void {
    const sendData = {id: this.id, ...user};
    this.userService.update(sendData).subscribe(
      resp => this.router.navigate(['users']),
      err => alert(err.message)
    );
  }

  getFormGroup(fields: any, data: any): void {
    const list: any[] = [];
    for (const field of fields) {
      let control = null;
      switch (field.controlType) {
        case 'select':
          control = new SelectField(field);
          break;
        case 'textarea':
          control = new TextareaField(field);
          break;
        default:
          control = new InputField(field);
      }
      control.validators = this.getValidators(control.validators);
      control.value = data[field.key];
      list.push(control);
    }
    this.fieldList = list;
  }

  getValidators(validators: string[]): ValidatorFn[] {
    return validators.map( validator => {
      const v = validator.split(':');
      const method: string = v.shift();
      return v.length === 0 ? Validators[method] : Validators[method](...v);
    });
  }
}
