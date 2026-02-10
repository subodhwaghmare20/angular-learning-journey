import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  // standalone: true,
})
export class CustomDirective {
  constructor(
    private blu: TemplateRef<any>,
    private land: ViewContainerRef,
  ) {}

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   console.log(this.blu);
  //   console.log(this.land);
  // }

  // @Input() set appCustomDirective(condition: boolean) {
  //   this.land.clear();
  //   if (condition) {
  //     this.land.createEmbeddedView(this.blu);
  //   }
  // }

  @Input() set appCustomDirective(count: number) {
    this.land.clear;
    for (let i = 0; i <= count; i++) {
      this.land.createEmbeddedView(this.blu, { $implicit: i,
        role:'Admin'
       });
    }
  }
}
