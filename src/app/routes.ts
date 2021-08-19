import { EventListService } from './Events/Shared/event-list-resolver.service';
import 
{
    EventRouteActivatorService,
    CreateEventComponent,
    EventListComponent,
    EventDetailComponent,
    ErrorComponent
} 
from './index'
import { Routes } from '@angular/router';

export const AppRoutes:Routes = [
    {
        path:'event/new', component: CreateEventComponent,
        canDeactivate:['canDeactivateCreateEvent']
    },
    {
        path:'events', component: EventListComponent,resolve:{events:EventListService}
    },
    {
        path:'event/:id', component: EventDetailComponent, 
        canActivate:[EventRouteActivatorService]
    },
    {
        path:'error', component: ErrorComponent
    },   
    {
        path:'', redirectTo:'/events',pathMatch:'full'
    },
    {
        path:'user',
        loadChildren : () => import('./User/user.module')
        .then(m => m.UserModule)
    }
]