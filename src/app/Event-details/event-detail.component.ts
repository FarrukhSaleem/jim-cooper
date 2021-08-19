import { IEvent } from './../Events/Shared/event.model';
import { EventService } from './../Events/Shared/event.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: "./event-detail.component.html",
    styles: [`
    .container { padding-left:20px; padding-right:20px;}
    .event-image : { height:100px; }
    `]
})

export class EventDetailComponent implements OnInit {
    event:IEvent;
    constructor(private eventService: EventService,private route : ActivatedRoute) {
        console.log('Details');
    }
    ngOnInit(): void {
        console.log('Details');
        this.event = this.eventService.GetEvent(+this.route.snapshot.params['id']);
    }

}