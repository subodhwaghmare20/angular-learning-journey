import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appDynamicColor]',
})
export class DynamicColor {
  // @Input('appDynamicColor') color: string = '';

  // constructor(
  //   private El: ElementRef,
  //   private render: Renderer2,
  // ) {}
  // ngOnChanges(changes: SimpleChanges): void {
  //   let newValue = changes['color'].currentValue;
  //   this.render.setStyle(this.El.nativeElement, 'backgroundColor', newValue || 'transparent');
  //   console.log(changes);
  // }

  @HostBinding('style.background') @Input('appDynamicColor') color: string = '';
}
