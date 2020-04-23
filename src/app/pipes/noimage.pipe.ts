import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: string, ...args: any[]): string {

    if ( !images ) {
      return 'assets/img/noimage.png';
    } else {
      return images;
    }
  }

}
