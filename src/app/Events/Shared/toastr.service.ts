import { Injectable } from "@angular/core";
declare let toastr:any

@Injectable()
export class ToastrService
{
    success(message:string,Parameter:string){
        toastr.success(message,Parameter);
    }
}