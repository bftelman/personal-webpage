import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-xp-taskbar></app-xp-taskbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
