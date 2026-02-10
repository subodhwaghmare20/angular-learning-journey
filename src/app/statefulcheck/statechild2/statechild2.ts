import { Component } from '@angular/core';
import { StateFulCounter } from '../../shared/Services/state-ful-counter';

@Component({
  selector: 'app-statechild2',
  imports: [],
  templateUrl: './statechild2.html',
  styleUrl: './statechild2.css',
})
export class Statechild2 {
  constructor(public update: StateFulCounter) {}
}
