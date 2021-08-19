import { ToastrService } from './Shared/toastr.service';
import { IEvent } from './Shared/event.model';
import { EventService } from './Shared/event.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

declare let toastr;
@Component({
    selector: 'event-list',
    template: `
    
    <div class="well container">
    
   
    <h1> Upcomming Angular Events</h1>
    
    <hr>
    <div class="row" >
    
   <event-thumbnail (click)="HandleClick(event.name)" *ngFor="let event of events" class="col-md-5"  [eventitem]="event"  (eventClick) ="handleClickEvent($event)"></event-thumbnail>
<input class="btn btn-primary" type="button" value="Wow"  (click)="DisplayToastr()" />
</div>
</div>
    `,
    styles :[`.pad-left {margin-left: 10px; }
    .well div { color: #bbb; }
    `]
})
export class EventListComponent implements OnInit {
    events:IEvent[];
    constructor(private ES:EventService,private route:ActivatedRoute,private tstrService:ToastrService)
    {
        
    }
    ngOnInit(): void {
        //this.ES.GetEvents().subscribe(events => {this.events= events});
        this.events = this.route.snapshot.data['events']
    }
    
    handleClickEvent(data){
console.log("Parent got data from child is :", data);
    }
    // handleClick(){
    //     this.Thumbnail.logging()
    // }
    HandleClick(name){
        console.log(name);
toastr.success(name);
    }
    DisplayToastr(){
        this.tstrService.success('ssfdfsd','sdfsdfsdf');
    }
}