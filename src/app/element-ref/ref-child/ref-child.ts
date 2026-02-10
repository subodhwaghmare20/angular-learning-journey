import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ref-child',
  imports: [],
  templateUrl: './ref-child.html',
  styleUrl: './ref-child.css',
})
export class RefChild {
  constructor(private el: ElementRef) {}

  clickEd() {
    console.log(this.el.nativeElement.head);
  }
}
