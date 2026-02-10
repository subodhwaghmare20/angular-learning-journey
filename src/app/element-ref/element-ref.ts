import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RefChild } from './ref-child/ref-child';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-element-reference',
  imports: [RefChild, CommonModule],
  templateUrl: './element-ref.html',
  styleUrl: './element-ref.css',
})
export class ElementReference {
  @ViewChild(RefChild) ChildReference!: ElementRef;
  val = true;
  click() {
    console.log(this.ChildReference.nativeElement);
  }
}
