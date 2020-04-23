import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasValue'
})
export class HasValuePipe implements PipeTransform {

  transform( value: any, property: string, defaultText: string ): string {
    if ( value && value[property] ) {
      return value[property];
    } else {
      return defaultText;
    }
  }

}
