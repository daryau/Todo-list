import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, filter?: any): any {
    switch(filter){
      case 'All':
        return items;

        case 'Active': 

        return items.filter(item => item.isCompleted == false);

        case 'Completed':
        return items.filter(item => item.isCompleted == true);   
    }
  }

}
