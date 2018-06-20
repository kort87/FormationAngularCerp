import { Pipe, PipeTransform } from '@angular/core';
import { States } from '../enums/states.enum';

@Pipe({
  name: 'refCommande'
})
export class RefCommandePipe implements PipeTransform {

  transform(value: string, args?: States): any {
    console.log(value);
    console.log(args);
    let prefix = '';
    switch (args) {
      case States.ALIVRER:
        prefix = 'AL-';
        break;
        case States.ENCOURS:
        prefix = 'EN-';
        break;
        case States.LIVREE:
        prefix = 'LI-';
        break;
    }
    return `${prefix}${value}`;
  }

}
