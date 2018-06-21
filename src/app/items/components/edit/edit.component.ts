import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Observable } from 'rxjs';
import { Item } from '../../../shared/interfaces/item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public item: Item;
  public id: string;

  constructor(private collectionService: CollectionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(this.id);
    // this.collectionService.getItemById(parseInt(this.id, 10)).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.item = data;
    //   }
    // );
    this.activatedRoute.data.subscribe(data => this.item = data['item']);
  }

}
