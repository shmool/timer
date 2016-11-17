import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      <button (click)="decrement()">-</button>
      <span class="number">{{ counter }}</span>
      <button (click)="increment()">+</button>
    </div>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counterValue = 0;
  @Output() counterChange = new EventEmitter();

  @Input()
  get counter() {
    return this.counterValue;
  }

  set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }

}
