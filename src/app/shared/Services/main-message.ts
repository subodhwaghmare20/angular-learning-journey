import { Injectable } from '@angular/core';

@Injectable()
export abstract class MainMessage {
  abstract pay(amount: number): void;
}
