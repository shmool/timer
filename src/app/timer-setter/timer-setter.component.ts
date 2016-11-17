import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer-setter',
  template: `
    <div class="timer-setter">
      <div class="counter">m: <app-counter [(counter)]="minutes"></app-counter></div>
      <div class="counter">s: <app-counter [(counter)]="seconds"></app-counter></div>
      <button (click)="emitTime()">Set</button>
    </div>
  `,
  styleUrls: ['./timer-setter.component.css']
})
export class TimerSetterComponent implements OnInit {
  @Output() setTime: EventEmitter<any> = new EventEmitter();
  private minutes:number = 0;
  private seconds:number = 0;

  constructor() { }

  ngOnInit() {
  }

  emitTime() {
    this.setTime.emit({
      minutes: this.minutes,
      seconds: this.seconds
    })
  }

}
