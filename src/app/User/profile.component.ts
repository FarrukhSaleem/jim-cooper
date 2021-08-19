import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './profile.component.html',
    styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    `]
})

export class ProfileComponent implements OnInit {
    ProfileForm: FormGroup
    firstName: FormControl
    lastName: FormControl
    constructor(private router: Router, private authService: AuthService) { }
    ngOnInit(): void {
        this.firstName = new FormControl(this.authService.currentUser?.firstName, [Validators.required,Validators.pattern('[a-zA-Z].*')])
        this.lastName = new FormControl(this.authService.currentUser?.lastName, Validators.required)

        this.ProfileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }
    updateprofile() {
        console.log("Form Valid ? :"+ this.ProfileForm.valid);
        if (this.ProfileForm.valid) {
            this.authService.updateprofile(this.firstName.value, this.lastName.value)
            this.router.navigate(['/events']);
        } else {
            console.log("not a valid form");
        }
    }
    cancel() {
        this.router.navigate(['/events']);

    }
    validatecontrol(controlName:string){
        if (controlName === "firstName"){
            return (this.firstName.valid || this.firstName.untouched);
        }
        else{
            return (this.lastName.valid || this.lastName.untouched);
        }
    }
}