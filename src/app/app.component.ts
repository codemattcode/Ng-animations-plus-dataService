import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  template: `
    <p>{{arr}}</p>
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

  arr:string = '';
  txt:string = '';

  ngOnInit(){
    this.arr = this.dataService.names[1];

    this.txt = this.dataService.myData();
  }

  
}