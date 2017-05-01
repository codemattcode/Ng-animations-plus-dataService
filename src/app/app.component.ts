import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  template: `
    <p>{{txt}}</p>
  `,
  styles: [`
    p {
      font-size: 1.5em;
      color: white;
    }
  `]
})

export class AppComponent {

  constructor(private dataService:DataService){
    
  }

  txt = 'what is the message?';
}