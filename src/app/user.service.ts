import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


import { Injectable } from '@angular/core';


import { User } from './models/index';


@Injectable()
export class UserService {
    users: Array<{ firstName, lastName, username,password }> = [
        {
            firstName: "Demo",
            lastName: "User",
            username: "user",
            password: "123456"
        }
    ];
    constructor(private http: Http) {
        if (localStorage.getItem('users')) {
            this.users = JSON.parse(localStorage.getItem('users'));
        }
    }

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
    loginUser(loginUser){
        for(let user of this.users){
            if(loginUser.username == user.username ){
                if(loginUser.password == user.password){
                    return Observable.of({msg:"SuccessFully Login",user:user});
                }
                else{
                   return Observable.throw(new Error("Password Not Match"));
                }
            }
        }
        return Observable.throw(new Error("User Not Registered"));
    }
    registerUser(newUser){
        this.users.push(newUser);
        localStorage.setItem('users',JSON.stringify(this.users));
        return Observable.of({msg:"SuccessFully Registered"})
    }





}
