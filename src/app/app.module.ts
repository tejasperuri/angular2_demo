import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

import { UserService } from './user.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';

import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,FlashMessagesModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
