import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { BillsComponent } from './page/bills/bills.component';
import { BillEditComponent } from './page/bill-edit/bill-edit.component';
import { AboutComponent } from './page/about/about.component';
import { UsersComponent } from './page/users/users.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'bills',
    component: BillsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'bill/:id',
    component: BillEditComponent,
  },
  {
    path: 'user/:id',
    component: UserEditComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
