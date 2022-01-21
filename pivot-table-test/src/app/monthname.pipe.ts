import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthname'
})
export class MonthnamePipe implements PipeTransform {

  transform(monthNumber: string, ...args: unknown[]): string {

    let monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    return monthNames[parseInt(monthNumber) - 1];
  }

}
