import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimerDemoComponent } from './timer-demo/timer-demo.component';
import { TimerSetterComponent } from './timer-setter/timer-setter.component';
import { CounterComponent } from './counter/counter.component';
import { FireworksComponent } from './fireworks/fireworks.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerDemoComponent,
    TimerSetterComponent,
    CounterComponent,
    FireworksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
