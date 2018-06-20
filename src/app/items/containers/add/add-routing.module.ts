import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class AddRoutingModule { }
