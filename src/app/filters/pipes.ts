import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBy',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term): any {
        if(items == null || term == null)
            return items;
        console.log('Filtering by ', term);
        return items.filter(item => item.id.indexOf(term) !== -1);
    }
}

@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
    transform(items: any[], sortedBy: string): any {
        console.log('sortedBy', sortedBy);
        
        if(items == null || sortedBy == null)
            return items;
        console.log('Sorting by ', sortedBy);

        if(sortedBy == 'rank' || sortedBy == 'clips')
        {
            return items.sort((a,b) => a[sortedBy] - b[sortedBy]);
        }
        if(sortedBy == '-rank' || sortedBy == '-clips')
        {
            sortedBy = sortedBy.substring(1);
            return items.sort((a,b) => b[sortedBy] - a[sortedBy]);
        }        
        else return items.sort((a, b) => {
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
        //console.log('filterByTag 1 - ', items);
        //console.log('filterByTag 2 - ', args);
        
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
        //console.log('filterByFirstLetter 1 - ', items);
        //console.log('filterByFirstLetter 2 - ', args);
        
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


@Pipe({name: 'times'})
export class TimesPipe implements PipeTransform {
  transform(value: number): any {
    const iterable = {};
    iterable[Symbol.iterator] = function* () {
      let n = 0;
      while (n < value) {
        yield ++n;
      }
    };
    return iterable;
  }
}