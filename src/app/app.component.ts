import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <p [style.color]="goBlue">{{txt}}</p>

    <p [style.color]=" txtStyle ? 'white' : 'purple' ">conditional code</p>

    <p [ngStyle]="txtStyles">ngStyle</p>
  `,
  styles: [`
    p {
      font-size: 3em;
    }
  `]
})

export class AppComponent {
  txt = 'style.color';

  goBlue = 'blue';
  
  

  txtStyles = {
    'text-decoration' : 'underline',
    'font-weight': 'bold'
  }
}