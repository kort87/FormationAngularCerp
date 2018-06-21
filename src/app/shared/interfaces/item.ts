import { States } from '../enums/states.enum';

export interface Item {
  id: number;
  name: string;
  reference: string;
  state: States;
}
