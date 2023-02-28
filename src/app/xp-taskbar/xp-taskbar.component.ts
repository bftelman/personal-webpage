import { Component } from '@angular/core';

@Component({
  selector: 'app-xp-taskbar',
  template: `
      <style>
      .task-bar {
        width: 100%;
        background: rgba(0, 0, 0, 0) linear-gradient(rgb(31, 47, 134) 0px, rgb(49, 101, 196) 3%, rgb(54, 130, 229) 6%, rgb(68, 144, 230) 10%, rgb(56, 131, 229) 12%, rgb(43, 113, 224) 15%, rgb(38, 99, 218) 18%, rgb(35, 91, 214) 20%, rgb(34, 88, 213) 23%, rgb(33, 87, 214) 38%, rgb(36, 93, 219) 54%, rgb(37, 98, 223) 86%, rgb(36, 95, 220) 89%, rgb(33, 88, 212) 92%, rgb(29, 78, 192) 95%, rgb(25, 65, 165) 98%) repeat scroll 0% 0%;
        position: fixed;
        bottom: 0px;
        height: 32px;
      }

      .start-button {
        background: none;
        border: none;
        outline: none;
      }

      .start-button-img {
        height: 32px;
      }

      .start-button-img:hover {
        filter: brightness(110%)
      }

    </style>
    <div class="task-bar">
      <button class="start-button" (click)="onClick()">
         <img class="start-button-img" [src]="isClicked ? '../../assets/start-button-pressed.svg' : '../../assets/start-button.svg'" alt="">
       </button>
    </div>
  `,
  styles: [
  ]
})
export class XpTaskbarComponent {
  isClicked = false;

  onClick() {
    this.isClicked = !this.isClicked;
    setTimeout(() => {
      this.isClicked = !this.isClicked;
    }, 150)
  }
}
