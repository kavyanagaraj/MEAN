import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'decadefilter'
})
export class DecadeFilterPipe implements PipeTransform {
  transform(items: any[], decade: any): any[] {
    if(!items) return [];
    if(!decade) return items;
    decade = parseInt(decade)
    return items.filter( item => {
      return (item.year > decade && item.year < decade+10);
    });
   }
}