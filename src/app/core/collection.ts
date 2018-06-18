import { Item } from '../shared/interfaces/item';
import { States } from '../shared/enums/states.enum';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'Romain',
    reference: '1234',
    state: States.ALIVRER
  },
  {
    id: 'b1',
    name: 'Mathieu',
    reference: '5678',
    state: States.ENCOURS
  },
  {
    id: 'c1',
    name: 'Geoffrey',
    reference: '9012',
    state: States.LIVREE
  }
];
