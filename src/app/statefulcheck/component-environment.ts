import { Injectable } from '@angular/core';

@Injectable()
export class ComponentEnvironment {
  count: number = 0;

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
