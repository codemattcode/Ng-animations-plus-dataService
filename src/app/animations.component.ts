import { Component, OnInit } from '@angular/core';

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
  ]
})
export class AnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
