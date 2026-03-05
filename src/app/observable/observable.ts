import { Component, OnInit } from '@angular/core';
import { numberObservable } from '../shared/Observable/observable-basic';
import { dataObservable } from '../shared/Observable/of-observable';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.html',
  styleUrl: './observable.css',
})
export class Observable implements OnInit {
  // ngOnInit(): void {
  //   numberObservable.subscribe({
  //     next: (value) => {
  //       console.log(value);
  //     },
  //     error: (err) => console.log(err),
  //     complete: () => {
  //       console.log('Completed');
  //     },
  //   });

  //   numberObservable.subscribe({
  //     next: (value) => {
  //       console.log('observer pattern :', value);
  //     },
  //   });
  // }

  ngOnInit(): void {
    dataObservable.subscribe((data) => console.log('userData :', data));
  }
}
