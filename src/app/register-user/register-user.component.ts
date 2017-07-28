import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
    selector: 'app-register-user',
    templateUrl: './register-user.component.html',
    styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
    registerForm: FormGroup;
    ngOnInit() {
    }
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private flashMsg: FlashMessagesService
    ) { 
        this.registerForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    register(form) {
        this.loading = true;
        this.userService.registerUser(form)
            .subscribe(
            data => {
                this.flashMsg.show(data.msg , { cssClass: 'text-success', timeout: 3000 });
                console.log(data);
                this.router.navigate(['/login']);
            },
            error => {
                this.flashMsg.show(error , { cssClass: 'text-danger', timeout: 3000 });
                this.loading = false;
            });
    }
}
