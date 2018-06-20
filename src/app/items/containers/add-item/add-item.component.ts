import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { States } from '../../../shared/enums/states.enum';
import { Router } from '@angular/router';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  public addForm: FormGroup;
  public intitules = Object.values(States);


  constructor(private collectionService: CollectionService, private router: Router) {

  }

  ngOnInit() {
  }

  public add(item: Item): void {
    this.collectionService.addItem(item);
    this.router.navigate(['/list']);
  }
}
