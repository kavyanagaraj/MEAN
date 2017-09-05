import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText || searchText.length < 2) return items;
    searchText = searchText.toLowerCase();
    return items.filter( item => {
      return item.title.toString().toLowerCase().includes(searchText);
    });
   }
}