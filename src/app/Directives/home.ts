import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHome]',
})
export class Home {
  constructor(private El: ElementRef) {}
  @HostListener('click', ['$event']) onMouseEnter(event: Event) {
    this.El.nativeElement.style.background = 'green';
    console.log(event.target);
  }
  @HostBinding('style.background') background = 'red';
  @HostBinding('class.is-Selected') isSelected = true;
}
