import { Component, OnInit } from '@angular/core';
import { States } from '../../../shared/enums/states.enum';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public intitules = Object.values(States);
  public newItem: Item;

  constructor(private collectionService: CollectionService,
              private router: Router) { }

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.newItem = {
      id: null,
      name: '',
      reference: '',
      state: States.ALIVRER
    };
  }

  public process(): void {
    console.log(this.newItem);
    this.collectionService.addItem(this.newItem).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          this.init();
          this.router.navigate(['/items/list']);
        }
      }
    );
  }

}
