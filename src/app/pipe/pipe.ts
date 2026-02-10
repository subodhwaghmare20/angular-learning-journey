import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CapPipe } from '../cap-pipe';
import { MultiPipe } from '../shared/multi-pipe';
import { ReducePipe } from '../shared/reduce-pipe';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule, CapPipe, MultiPipe, ReducePipe],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css',
})
export class Pipe {
  date = new Date();
  salary: number = 21007.88238562856657;
  user: string = 'subodh Waghmare';

  userData = {
    name: 'Subodh',
    role: 'ADMIN',
    salary: 20,
    age: 10,
    isAlive: false,
  };

  count: number = 0;

  nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // mutateArray() {
  //   this.nums.push(4); // same reference ❌
  // }

  replaceArray() {
    this.nums = [...this.nums, 4]; // new reference ✔
  }
}
