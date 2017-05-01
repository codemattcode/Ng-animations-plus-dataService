import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <p (click)='changeClass()'>{{title}}</p>
  `,
  styles: [`
    p {
      color: white;
      font-size: 3em;
    }
  `]
})

export class AppComponent {
  title = 'this is new'
  changeClass(){
    this.title = 'golden oldie'; 
  }
}