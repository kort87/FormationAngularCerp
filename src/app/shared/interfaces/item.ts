import { States } from '../enums/states.enum';

export interface Item {
  id: string;
  name: string;
  reference: string;
  state: States;
}
