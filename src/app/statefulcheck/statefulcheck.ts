import { Component } from '@angular/core';
import { Statechild1 } from './statechild1/statechild1';
import { Statechild2 } from './statechild2/statechild2';
import { Statechild3 } from './statechild3/statechild3';
import { StateFulCounter } from '../shared/Services/state-ful-counter';
import { ComponentEnvironment } from './component-environment';
import { MainMessage } from '../shared/Services/main-message';

@Component({
  selector: 'app-statefulcheck',
  imports: [Statechild1, Statechild2, Statechild3],
  templateUrl: './statefulcheck.html',
  styleUrl: './statefulcheck.css',
  providers: [ComponentEnvironment],
})
export class Statefulcheck {
  constructor(
    public update: StateFulCounter,
    public count: ComponentEnvironment,
    // public main: MainMessage,
  ) {}

  // pay(){
  //   this.main.pay(2000)
  // }
}
