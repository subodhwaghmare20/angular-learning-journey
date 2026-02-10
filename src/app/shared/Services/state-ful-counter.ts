import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateFulCounter {
  private _counter = signal(0);

  count = this._counter.asReadonly();

  increment() {
    this._counter.update((value) => value + 1);
  }

  decrement() {
    this._counter.update((value) => value - 1);
  }
}
