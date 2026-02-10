import { Component } from '@angular/core';
import { StateFulCounter } from '../../shared/Services/state-ful-counter';
import { ApiService } from '../../shared/Services/api';

@Component({
  selector: 'app-statechild3',
  imports: [],
  templateUrl: './statechild3.html',
  styleUrl: './statechild3.css',
})
export class Statechild3 {
  constructor(
    public update: StateFulCounter,
    public ap: ApiService,
  ) {}

  cl() {
    this.ap.call();
  }
}
