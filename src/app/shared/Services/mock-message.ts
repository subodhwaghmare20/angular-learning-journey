import { Injectable } from '@angular/core';
import { MainMessage } from './main-message';

@Injectable({
  providedIn: 'root',
})
export class MockMessage extends MainMessage {
  override pay(amount: number): void {
    console.log('paid via upi' + amount);
  }
}
