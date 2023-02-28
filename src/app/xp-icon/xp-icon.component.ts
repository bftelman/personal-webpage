import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-xp-icon',
  template: `
    <style>
      .icon {
        width: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        user-select: none;
        cursor: pointer;
        margin-bottom: 15px;
      }

      .icon-img {
        max-height:100%; 
        max-width:100%;
      }

      .icon-name {
        color: white;
        margin-top: 5px;
        text-shadow: black 0px 1px 1px;
      }

      .icon-name:active {
        background-color: rgb(11, 97, 255);
      }

      .icon-name {
        text-align: center;
        font-size: 14px;
      }
    </style>
    <div class="icon">
      <img [src]="imageSrc" [alt]="name" class="icon-img">
      <p class="icon-name"> {{ name }}</p>
    </div>
  `,
  styles: [
  ]
})
export class XpIconComponent {
  @Input() name: string = ""
  @Input() imageSrc: string = ""
}
