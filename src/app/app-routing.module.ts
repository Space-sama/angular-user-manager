import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';
import { UserClientInterfaceComponent } from './components/user-client-interface/user-client-interface.component';
import { LoginUsersComponent } from './login-users/login-users.component';
import { RegisterUsersComponent } from './register-users/register-users.component';

const routes: Routes = [
  {
    path: '',
    component: LoginUsersComponent
  },
  // All
  { path: 'users', component: ListOfUsersComponent},

  // Create
  { path: 'users/createOne', component: UserClientInterfaceComponent},

  // Edit
  { path: 'user/:id', component: UserClientInterfaceComponent},

  // Login
  { path: 'users/login', component: LoginUsersComponent},

  // Register
  { path: 'users/registerOne', component: RegisterUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
