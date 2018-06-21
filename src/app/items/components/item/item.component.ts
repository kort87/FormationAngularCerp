import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { States } from '../../../shared/enums/states.enum';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  public state = States;
  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
  }

  changeState(status: States): void {
    switch (status) {
      case States.ENCOURS:
        this.item.state = States.ALIVRER;
        break;
      case States.ALIVRER:
      this.item.state = States.LIVREE;
        break;
    }
    this.collectionService.updateItem(this.item).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
