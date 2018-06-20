import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() newItem: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.addForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      reference: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      state: States.ALIVRER
    });
  }

  public process(): void {
    console.log(this.addForm.value);
    this.newItem.emit(this.addForm.value);
    /* Attention, le reset est un reset natif HTML5, il vire toutes les valeurs par défaut; elles sont
       à réinitialiser. */
    this.addForm.reset();
    this.addForm.get('state').setValue(States.ALIVRER);

  }

}
