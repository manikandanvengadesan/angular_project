import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    console.log(value)
    let date = new Date().getFullYear()
    let afterTwoYear = date + 2
    return afterTwoYear;
  }

}
