/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimerSetterComponent } from './timer-setter.component';

describe('TimerSetterComponent', () => {
  let component: TimerSetterComponent;
  let fixture: ComponentFixture<TimerSetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerSetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
