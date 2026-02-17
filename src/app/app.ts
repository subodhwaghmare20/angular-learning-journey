import { Component, signal, ViewEncapsulation } from '@angular/core';
import { Lifecycle } from './lifecycle/lifecycle';
import { AttributeDirective } from './attribute-directive/attribute-directive';
import { Pipe } from './pipe/pipe';
import { ServiceProduct } from './service-product/service-product';
import { ComponentLife } from './component-life/component-life';
import { ElementReference } from './element-ref/element-ref';
import { Communication } from './communication/communication';
import { Statefulcheck } from './statefulcheck/statefulcheck';
import { Routing } from './routing/routing';
// import { RouterOutlet } from '../../node_modules/@angular/router/types/_router_module-chunk';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',

  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // encapsulation: ViewEncapsulation.None,
})
export class App {
  protected readonly title = signal('SelfProject');
}
