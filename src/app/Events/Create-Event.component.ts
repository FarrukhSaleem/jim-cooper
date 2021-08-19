import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./Shared/event.service";

@Component({
    templateUrl: "Create-Event.component.html",
    styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    `]
})

export class CreateEventComponent {
    isDirty: boolean = false;
    newEvent
    constructor(private router: Router, private eventService: EventService) {

    }
    cancel() {
        this.router.navigate(['/events']);

    }
    saveEvent(form) {
        console.log(form);
        this.eventService.saveEvent(form);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }
}
