import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { map, tap } from 'rxjs/operators';

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

  constructor(
    private userService: UserService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params.id;
    this.user$ = this.userService.get(this.id).pipe(
      tap( (user: User) => {
        console.log(user);
        for (const key of Object.keys(this.formGroup.controls)) {
          this.formGroup.controls[key].setValue(user[key]);
        }
      })
    );
  }

  emailValidator(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.userService.checkEmail(ctrl.value, this.id);
  }

  onSave(): void {
    console.log(this.formGroup);
  }
}
