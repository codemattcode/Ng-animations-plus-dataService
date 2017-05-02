import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-animations',
  template: `
    <div>
    <p>Animations</p>
    </div>
  `,
  styles: [
    `
    div {
      padding: 20px;
    }
    p {
      font-size: 2em;
      color: white;
    }
    `
  ],
  animations: [
    trigger('myAni', [

      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(2)',
      })),

    ]),
  ]
})
export class AnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
