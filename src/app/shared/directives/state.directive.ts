import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';
import { States } from '../enums/states.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit, OnChanges {

  @Input() appState: States;
  @HostBinding('class') nomClass: string;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.appState);
    this.nomClass = this.formatClass(this.appState);
  }

  ngOnChanges(): void {
    this.nomClass = this.formatClass(this.appState);
  }

  private removeAccents(etat: string): string {
    return etat.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  private formatClass(etat: States): string {
    return `state-${this.removeAccents(etat.toLowerCase().replace(' ', '-'))}`;
  }
}
