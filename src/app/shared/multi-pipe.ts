import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi',
  pure: true,
})
export class MultiPipe implements PipeTransform {
  transform(value: number, factor: number): number {
    return value * factor;
  }
}
