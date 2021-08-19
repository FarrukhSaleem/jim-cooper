import { AuthService } from './auth.service';
import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    templateUrl:'./login.component.html',
    styles:[`
    em { float:right; color:#E05C65; padding-left:10px; }
    `]
})

export class LoginComponent{
    userName
    password
    constructor(private authService:AuthService,private route:Router){}
    
    login(loginValues){
        console.log(loginValues.value);
        if(loginValues.valid){
        this.authService.loginUser(loginValues.value.userName,loginValues.value.password);
        this.route.navigate(['events']);
        }
    }
    cancel(){
        this.route.navigate(['events']);
    }
}