import { Component } from '@angular/core';
import { trigger, state, style, transition, animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-animations',
  template: `
    <div>
     <p [@myAni]=mystate (click)="animateMe()">I will animate</p>
    </div>
  `,
  styles: [
    `
    div {
      padding: 20px;
    }
    p {
      font-size: 2rem;
      color: white;
    }
    `
  ],
  animations: [
    trigger('myAni', [
        state('small', style({
            transform: 'translateY(10px)',
        })),
        state('large', style({
            transform: 'translateY(30px)',
        })),
        transition('small => large', animate('100ms ease-in')),
    ]),
  ]
})
export class AnimationsComponent {

  mystate: string = 'small';

  animateMe() {
        this.mystate = (this.mystate === 'small' ? 'large' : 'small');
  }

}
