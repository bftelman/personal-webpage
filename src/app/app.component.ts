import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <style>
      .desktop {
        padding: 16px 24px;
      }
    </style>
    <div class="desktop">
      <app-xp-icon name="My Github" imageSrc="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" (click)="openGithub()"></app-xp-icon>
      <app-xp-icon name="Youtube" imageSrc="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" (click)="openYoutube()"></app-xp-icon>
    </div>
    <app-xp-taskbar></app-xp-taskbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  openGithub() {
    window.open("https://github.com/bftelman/")
  }
  openYoutube() {
    window.open("https://www.youtube.com/watch?v=EmHYhDXz-Zs")
  }
}
