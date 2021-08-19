import { EventService } from './event.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";

@Injectable()
export class EventRouteActivatorService implements CanActivate
{
    constructor(private eventService:EventService,private router:Router){}
    canActivate(route:ActivatedRouteSnapshot)
    {
        const CanExists = !!this.eventService.GetEvent(+route.params['id'])
        if(!CanExists)
        {
            this.router.navigate(['/error']);
        }
        return CanExists;
    }
}