import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { States } from '../../shared/enums/states.enum';
import { Item } from '../../shared/interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const COLLECTION: Item[] = [ {
      id: 1,
      name: 'Romain',
      reference: '1234',
      state: States.ALIVRER
    },
    {
      id: 2,
      name: 'Mathieu',
      reference: '5678',
      state: States.ENCOURS
    },
    {
      id: 3,
      name: 'Geoffrey',
      reference: '9012',
      state: States.LIVREE
    }];
    return {COLLECTION};
  }
}
