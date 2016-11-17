import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-demo',
  styleUrls: ['./timer-demo.component.css'],
  template: `
  <div class="main">
    <app-timer [minutes]="time.minutes" [seconds]="time.seconds" (zero)="setZeroTime()"></app-timer>
    <div class="settings">
    <div [hidden]="!setterAvailable">
      <a href="#" (click)="toggleSetter()">{{ setterOpen ? 'close' : 'open' }} time setter</a>
      <app-timer-setter [hidden]="!setterOpen" (setTime)="setNewTime($event)"></app-timer-setter>
    </div>
    <app-fireworks [hidden]="!showFireworks"></app-fireworks>
    </div>
    </div>
  `
})
export class TimerDemoComponent implements OnInit {
  private time;
  private setterAvailable:boolean = true;
  private setterOpen:boolean = false;
  private showFireworks:boolean = false;

  constructor() { }

  ngOnInit() {
    this.time = {
      minutes: 5,
      seconds: 0
    }
  }

  toggleSetter() {
    this.setterOpen = !this.setterOpen;
  }

  setNewTime(newTime) {
    this.time = newTime;
  }

  setZeroTime() {
    this.setterAvailable = false;
    this.showFireworks = true;
  }
}
