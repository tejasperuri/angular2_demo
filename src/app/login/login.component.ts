import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(
    private userService: UserService,
    private flashMsg: FlashMessagesService
  ) { 
    this.loginForm = new FormGroup({
      username: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required)
    });
  }
  login(form){
    this.userService.loginUser(form).subscribe(
      (data)=>{
        console.log(data);
        this.flashMsg.show(data.msg , { cssClass: 'text-success', timeout: 3000 });
      },
      (err)=>{
        console.log(err);
        this.flashMsg.show(err , { cssClass: 'text-danger', timeout: 3000 });
      }
    )
  }

  ngOnInit() {
  }

}
