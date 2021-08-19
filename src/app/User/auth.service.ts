import { Injectable } from "@angular/core";
import { IUser} from "./user.model"

@Injectable()
export class AuthService{
    currentUser:IUser

    constructor(){}
    loginUser(userName:string,password:string){
        this.currentUser = {
            id:1,
            firstName:'Farrukh',
            lastName:'Saleem',
            userName:'farrukh.saleem'
        }
    }
    isAuthenticated(){
        return !!this.currentUser;
    }
    updateprofile(firstName:string,lastName:string){
this.currentUser.firstName=firstName
this.currentUser.lastName=lastName
    }
}