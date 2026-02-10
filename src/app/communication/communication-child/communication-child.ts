import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Home } from '../../Directives/home';
import { DynamicColor } from '../../Directives/dynamic-color';
import { CustomDirective } from '../../Directives/custom-directive';

@Component({
  selector: 'app-communication-child',
  imports: [],
  templateUrl: './communication-child.html',
  styleUrl: './communication-child.css',
})
export class CommunicationChild {
  // @ViewChild('data') El!: ElementRef<HTMLInputElement>;
  // clickVal() {
  //   console.log(this.El.nativeElement);
  // }
  // constructor() {}
  // val: boolean = false;

  // @ViewChild('heading') el!: ElementRef;
  @ViewChildren('heading') el!: QueryList<ElementRef>;

  check() {
    console.log(
      this.el.map((a) => {
        console.log(a.nativeElement);
        return a.nativeElement;
      }),
    );
  }
}
