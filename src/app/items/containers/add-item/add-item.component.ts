import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { States } from '../../../shared/enums/states.enum';
import { Router } from '@angular/router';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  public addForm: FormGroup;
  public intitules = Object.values(States);

  constructor(private fb: FormBuilder, private collectionService: CollectionService, private router: Router) {
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
    this.collectionService.addItem(this.addForm.value);
    /* Attention, le reset est un reset natif HTML5, il vire toutes les valeurs par défaut; elles sont
       à réinitialiser. */
    this.addForm.reset();
    this.addForm.get('state').setValue(States.ALIVRER);
    this.router.navigate(['/list']);
  }

  // public checkErrors(): boolean {
  //   for (let control in this.addForm.controls) {
  //     if (control.)
  //   }
  //   return true;
  // }
}
