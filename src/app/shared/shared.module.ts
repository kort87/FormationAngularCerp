import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppFormComponent } from './components/app-form/app-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { RefCommandePipe } from './pipes/ref-commande.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [NavComponent, StateDirective, AppFormComponent, FilterPipe, RefCommandePipe],
  exports: [NavComponent, StateDirective, AppFormComponent, FilterPipe, RefCommandePipe]
})
export class SharedModule { }
