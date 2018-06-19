import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';

const appRoutes: Routes = [
  { path: 'list', component: ListItemsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }
