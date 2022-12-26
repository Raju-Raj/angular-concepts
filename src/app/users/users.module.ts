import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ]
})
export class UsersModule { }
