import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { States } from '../../enums/states.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {
  public addForm: FormGroup;
  public intitules = Object.values(States);
  @Input() editItem: Item;
  @Output() newItem: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    console.log(this.editItem);
  }

  private getItem(): Item {
    const data = this.addForm.value as Item;
    if (!this.editItem) {
      return data;
    } else {
      const id = this.editItem.id;
      return { id, ...data};
    }
  }

  createForm() {
    this.addForm = this.fb.group({
      name: [ this.editItem ? this.editItem.name : '', Validators.compose([Validators.required, Validators.minLength(5)])],
      reference: [this.editItem ? this.editItem.reference : '', Validators.compose([Validators.required, Validators.minLength(4)])],
      state: this.editItem ? this.editItem.state : States.ALIVRER
    });
  }

  public process(): void {
    console.log(this.addForm.value);
    this.newItem.emit(this.getItem());
    /* Attention, le reset est un reset natif HTML5, il vire toutes les valeurs par défaut; elles sont
       à réinitialiser. */
    this.addForm.reset();
    this.addForm.get('state').setValue(States.ALIVRER);

  }

}
