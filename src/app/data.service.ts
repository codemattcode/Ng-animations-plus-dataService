import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }
    names = [
      'fred', 'amy', 'dave', 'margaret'
    ];

    myData() {
      return 'This is my data';
    }
}
