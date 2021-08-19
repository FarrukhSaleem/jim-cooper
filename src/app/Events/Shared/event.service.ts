import { IEvent } from './event.model';
import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs';

@Injectable()
export class EventService {
   GetEvents():Observable<IEvent[]> {
       let subject = new Subject<IEvent[]>();
       setTimeout(() => {subject.next(EVENTS); subject.complete();},2000); 
       return subject;
        
    }
    GetEvent(id:number):IEvent{
        console.log('Detail');
return EVENTS.find(e=> e.id===id); 
    }
    saveEvent(event:IEvent){
        event.id=999;
        event.sessions = [];
        EVENTS.push(event);
    }
}
const EVENTS:IEvent[] = [
    {
        id: 1,
        name: 'Angular Connect',
        date: new Date('09/26/2036'),
        time: '10:00 am',
        price: 599.99,
        imageUrl:'/assets/images/ng-vegas.png',
        location:
        {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        },
        sessions:[
            {
            id:1,
            name:'sd',
            presenter:'Farrukh Saleem Sheikh',
            duration:1,
            level:'Expert',
            abstract:'This is session for introduction',
            voters:['A','B','C']
            },
            {
                id:2,
                name:'as',
                presenter:'Farrukh Saleem',
                duration:2,
                level:'Normal',
                abstract:'This is session for details',
                voters:['D','E','F']
            }
        ]
    },
    {
        id: 2,
        name: 'Angular Connect2',
        date: new Date('09/26/2036'),
        time: '10:00 am',
        price: 599.99,
        imageUrl:'/assets/images/basic-shield.png',
        location:
        {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        },
        sessions:[
            {
            id:1,
            name:'sdfsdf',
            presenter:'Farrukh',
            duration:1,
            level:'Expert',
            abstract:'This is session for',
            voters:['A','B','C']
            },
            {
                id:2,
                name:'ghjgjh',
                presenter:'Saleem',
                duration:2,
                level:'Normal',
                abstract:'for details',
                voters:['D','E','F']
            }
        ]
    }
]