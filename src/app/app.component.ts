import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<nav-comp></nav-comp>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'ng-fundamentals';
}
