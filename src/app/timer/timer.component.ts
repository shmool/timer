import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

const MAX_SECONDS = 59;

@Component({
  selector: 'app-timer',
  styleUrls: ['./timer.component.css'],
  template: `
    <div class="timer">
      {{ minutes }}:{{ seconds | number:'2.0-0' }}
    </div>
  `,
})
export class TimerComponent implements OnInit, OnChanges {
  @Input() private minutes: number;
  @Input() private seconds: number;
  @Output() private zero:EventEmitter<any> = new EventEmitter();
  private intervalId;
  private maxSeconds:number = MAX_SECONDS;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges):void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => {
      this.seconds--;
      if (this.seconds === -1) {
        this.seconds = this.maxSeconds;
        this.minutes--;
      }
      if (this.minutes === 0 && this.seconds === 0) {
        this.zero.emit();
      }
    }, 1000)
  }
}
