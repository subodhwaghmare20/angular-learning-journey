import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
})
export class ReducePipe implements PipeTransform {
  transform(value: number[]): number {
    return value.reduce((a, b) => a + b, 0);
  }
}
