import { EventService } from './event.service';
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import {map} from 'rxjs/operators'
@Injectable()
export class EventListService implements Resolve<any>{
constructor(private eventService:EventService){}
    resolve() {
        return this.eventService.GetEvents().pipe(map(events =>events))
    }
}