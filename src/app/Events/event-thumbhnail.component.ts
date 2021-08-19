import { ToastrService } from './Shared/toastr.service';
import { IEvent } from './Shared/event.model';
import { Component, Input, Output,EventEmitter, OnInit } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/event',event.id]" class="hoverwell thumbnail container">
    <div *ngIf="event?.id">id : {{event?.id}}</div>
    <div *ngIf="event?.name">name : {{event?.name}}</div>
    <div *ngIf="event?.date">date : {{event?.date}}</div>
    <div *ngIf="event?.time">time : {{event?.time}}</div>
    <div *ngIf="event?.price">price : \${{event?.price}}</div>
    <div *ngIf="event?.imageUrl">image : <img [src]="event?.imageUrl" /></div>
    <div *ngIf="event?.location?.address">location Address : {{event?.location?.address}}</div>
    <div *ngIf="event?.location?.city">Location city : {{event?.location?.city}}</div><span class="pad-left"></span><span class="pad-left"></span>
    <div *ngIf="event?.location?.country">Location Country : {{event?.location?.country}}</div>
    <input type="button" class="btn btn-primary" (click)="handleclickMe();" value="Click Me" />
    </div>
    `,
    styles :[`.pad-left {margin-left: 10px; }
    .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent implements OnInit {
    ngOnInit(): void {
        
    }
    constructor(private tstrService:ToastrService)
    {

    }

    @Input('eventitem') event:IEvent;
@Output() eventClick = new EventEmitter();
SomeProperty:any = 'Some Property';
handleclickMe(){
        this.eventClick.emit(this.event.name);
        
    }
    logging(){
        console.log('abc');
    }
}