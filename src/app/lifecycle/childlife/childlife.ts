import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childlife',
  imports: [],
  templateUrl: './childlife.html',
  styleUrl: './childlife.css',
})
export class Childlife implements OnChanges {
  @Input() count!: number;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  public counter() {
    this.count++;
  }
}
