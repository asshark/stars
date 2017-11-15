import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term): any {
        console.log('term', term);
      
        return term 
            ? items.filter(item => item.title.indexOf(term) !== -1)
            : items;
    }
}

@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
    transform(items: any[], sortedBy: string): any {
        console.log('sortedBy', sortedBy);
        
        return items.sort(
            (a, b) => {
                return b[sortedBy] - a[sortedBy]
            });
    }
}