import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  cols: {title: string, key: string}[] = [
    {title: '#', key: 'id'},
    {title: 'Keresztnév', key: 'first_name'},
    {title: 'Vezetéknév', key: 'last_name'},
    {title: 'Email', key: 'email'},
    {title: 'Cégnév', key: 'company'},
    {title: 'Cím', key: 'address'},
    {title: 'Telefon', key: 'phone'},
  ];

  list$: Observable<User> = this.userService.get();

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

}
