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
        
        if(items == null)
            return 0;

        return items.sort((a, b) => {
            if (a[sortedBy] < b[sortedBy]) {
                return -1;
              } else if (a[sortedBy] > b[sortedBy]) {
                return 1;
              } else {
                return 0;
              }
        });
    }
}

@Pipe({
    name: 'filterByTag',
    pure: false
})
export class FilterByTagPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        console.log('filterByTag 1 - ', items);
        console.log('filterByTag 2 - ', args);
        
        if(args == null || args.length == 0)
            return items;
        else
        {
            return items.filter(item => {
                for(let t of args)
                {
                    if(item.tags.indexOf(t) < 0)
                        return false;
                }
                return true;
              })
        }
    }

    function (haystack, arr) {
        return arr.some(function (v) {
            return haystack.indexOf(v) >= 0;
        });
    };
}


@Pipe({
    name: 'filterByFirstLetter',
    pure: false
})
export class FilterByFirstLetterPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        console.log('filterByFirstLetter 1 - ', items);
        console.log('filterByFirstLetter 2 - ', args);
        
        if(args == null || args.length == 0 || args[0] == '*')
            return items;
        else
        {
            return items.filter(item => {
                if(item.id.startsWith(args[0]))
                    return true;
                else
                    return false;
              })
        }
    }

    function (haystack, arr) {
        return arr.some(function (v) {
            return haystack.indexOf(v) >= 0;
        });
    };
}

