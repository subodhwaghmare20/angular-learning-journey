import { Component } from '@angular/core';
import { StateFulCounter } from '../../shared/Services/state-ful-counter';

@Component({
  selector: 'app-statechild1',
  imports: [],
  templateUrl: './statechild1.html',
  styleUrl: './statechild1.css',
})
export class Statechild1 {
  constructor(public update: StateFulCounter) {}
}
