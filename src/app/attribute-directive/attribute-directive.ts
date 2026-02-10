import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { Child } from './child/child';

@Component({
  selector: 'app-attribute-directive',
  imports: [NgClass, NgStyle, Child],
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.css',
})
export class AttributeDirective {
  green: boolean = true;
  dark: boolean = false;
  Change() {
    this.green = !this.green;
    this.dark = !this.dark;
  }
  width: string = '100px';
  color: string = 'red';
  heightCal: string = '50px';
}
