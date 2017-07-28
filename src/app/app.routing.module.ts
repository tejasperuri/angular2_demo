import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterUserComponent } from './register-user/register-user.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register',   component: RegisterUserComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}