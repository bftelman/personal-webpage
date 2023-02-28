import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-xp-window',
  template: `
  <style>
    .window-header {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      height: 28px;
      background: rgba(0, 0, 0, 0) linear-gradient(rgb(0, 88, 238) 0%, rgb(53, 147, 255) 4%, rgb(40, 142, 255) 6%, rgb(18, 125, 255) 8%, rgb(3, 111, 252) 10%, rgb(2, 98, 238) 14%, rgb(0, 87, 229) 20%, rgb(0, 84, 227) 24%, rgb(0, 85, 235) 56%, rgb(0, 91, 245) 66%, rgb(2, 106, 254) 76%, rgb(0, 98, 239) 86%, rgb(0, 82, 214) 92%, rgb(0, 64, 171) 94%, rgb(0, 48, 146) 100%) repeat scroll 0% 0%;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 8px;
      color: white;
      text-shadow: black 0px 1px 1px;
    }
    
    .window {
      max-width: 640px;
      position: absolute;
      z-index: 1000;
    }

    .window-main {
      height: 480px;
      background-color: #ffffff;
      border: 3px solid #0046D5;
      padding: 1em;
      border-top: none;
      overflow-y: scroll;
    }

    ::ng-deep img {
        max-width: 100%;
        max-height: 100%;
    }

    .window-controls {
      margin-left: auto;
      display: flex;
      align-items: center;
    }

    button:active {
      filter: brightness(110%);
    }

    button {
      width: 20px;
      height: 20px;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }
  </style>

    <div class="window" [style.top.px]="top" [style.left.px]="left">
      <div class="window-header">
        <p class="window-name"> {{ title }}</p>
        <div class="window-controls">
          <button><img src="../../assets/minimize-button.svg" alt=""></button>
          <button><img src="../../assets/maximize-button.svg" alt=""></button>
          <button><img src="../../assets/close-button.svg" alt=""></button>
        </div>
      </div>
      <div class="window-main">
        <ng-content></ng-content>
      </div>
    </div>

  `,
  styles: [
  ]
})
export class XpWindowComponent {
  @Input() title = "";
  @Input() top = "";
  @Input() left = "";
}
