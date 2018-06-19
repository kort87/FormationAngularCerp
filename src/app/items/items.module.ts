import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListItemsComponent],
  declarations: [ListItemsComponent, ItemComponent]

})
export class ItemsModule { }
