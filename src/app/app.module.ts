import { ToastrService } from './Events/Shared/toastr.service';
import { AuthService } from './User/auth.service';
import { EventListService } from './Events/Shared/event-list-resolver.service';
import 
{
  EventRouteActivatorService,
  CreateEventComponent,
  EventService,
  EventThumbnailComponent,
  EventListComponent,
  EventDetailComponent,
  ErrorComponent,
  NavComponent,
  AppComponent,
  AppRoutes
} 
from './index'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailComponent,
    CreateEventComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    AuthService,
    {
      provide:'canDeactivateCreateEvent',
      useValue:checkDirtyState
    },
    EventListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
  
    return window.confirm('You havn\'t saved this event, do you really want to cancel?');
  
  return true;
}