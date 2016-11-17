import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fireworks',
  template: `
    <img src="assets/fireworks.gif">
  `,
  styleUrls: ['./fireworks.component.css']
})
export class FireworksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
