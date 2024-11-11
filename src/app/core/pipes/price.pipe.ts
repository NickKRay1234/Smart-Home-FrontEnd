import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true,
})
export class PricePipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (value || value === 0) {
      const arrVal = value.toString().split('');
      let str = '';
      for (let i = arrVal.length; i > 0; i -= 3) {
        str += arrVal.splice(-3).join('') + ' ';
      }

      return str.split(' ').reverse().join(' ');
    }

    return '';
  }
}
