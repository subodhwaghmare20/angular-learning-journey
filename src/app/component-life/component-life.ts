import { Component } from '@angular/core';
import { Childlife } from '../lifecycle/childlife/childlife';
import { Child } from './child/child';

@Component({
  selector: 'app-component-life',
  imports: [Child],
  templateUrl: './component-life.html',
  styleUrl: './component-life.css',
})
export class ComponentLife {
  user: string = 'Subodh Waghmare';
}
