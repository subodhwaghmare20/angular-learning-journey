import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cap',
  standalone: true,
})
export class CapPipe implements PipeTransform {
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
