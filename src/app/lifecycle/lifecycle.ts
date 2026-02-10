import { Component, ViewChild } from '@angular/core';
import { Child } from '../attribute-directive/child/child';
import { Childlife } from './childlife/childlife';
// import { Childlife } from './childlife/childlife';

@Component({
  selector: 'app-lifecycle',
  imports: [Childlife],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle {
  val: number = 0;

  increase() {
    this.val++;
  }
}
