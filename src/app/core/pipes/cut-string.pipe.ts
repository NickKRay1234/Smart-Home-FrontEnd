import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutString',
  standalone: true,
})
export class CutStringPipe implements PipeTransform {
  transform(value: string): string {
    return value.slice(1, 57) + '...';
  }
}
