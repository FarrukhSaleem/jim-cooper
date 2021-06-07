import { Component } from "@angular/core";

@Component({
    selector: 'event-list',
    template: `
    <div>
        <h1> Upcomming Angular Events</h1>
        <hr>
        <div well hoverwell thumbnail>
        <h2>{{event.name}}</h2>
        </div>
    </div>`
})
export class EventListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '09/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angular-connect-shield.png',
        location:
        {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}