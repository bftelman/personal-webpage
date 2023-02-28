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
      <app-xp-icon name="My Github" imageSrc="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" url="https://github.com/bftelman/"></app-xp-icon>
      <app-xp-icon name="Youtube" imageSrc="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" url="https://www.youtube.com/watch?v=EmHYhDXz-Zs"></app-xp-icon>
      <app-xp-window title="❓ About me" top="20" left="150">
        <p> Hello, My name is Telman. I am a software engineer. This is my personal webpage. Have fun!</p>
        <br>
        <h4> 📪 My contacts: </h4>
        <ul>
          <li><a href="mailto:babayevtolman@gmail.com">babayevtolman@gmail.com</a></li>
          <li><a href="mailto:amamdemous@gmail.com">amamdemous@gmail.com</a></li>
        </ul>
        <br>
        <h4> 📎 My CV: </h4>
        <a target="_blank" href="https://drive.google.com/file/d/1Km-WdVg6aUqwQF-iZ6CaGT6iW-Wpe74n/view?usp=sharing">Link to Google Drive</a>
      </app-xp-window>
      <app-xp-window title="🎨 A Beatiful Image" top="20" left="800">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" alt="Starry Night">
      </app-xp-window>
    </div>
    <app-xp-taskbar></app-xp-taskbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
