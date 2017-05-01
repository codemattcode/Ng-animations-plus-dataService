import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }
    names = [
      'Fred', 'Amy', 'Dave', 'Margaret'
    ];

    myData() {
      return 'This is my data from a Service';
    }
}
