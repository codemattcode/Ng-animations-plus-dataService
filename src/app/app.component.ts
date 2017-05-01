import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  template: `
    <p>{{arr}}</p>
    <p>{{txt}}</p>
    <hr>
    <app-animations></app-animations>
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

  arr:string = '';
  txt:string = '';

  ngOnInit(){
    this.arr = this.dataService.names[0];

    this.txt = this.dataService.myData();
  }

  
}