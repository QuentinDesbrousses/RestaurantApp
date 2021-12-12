import {Component, Input} from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent {
  @Input() title = '';
  @Input() categories = [''];
  @Input() allergenes = [''];

  constructor(private fb: FormBuilder) { }

  creationIngredient = this.fb.group({
    nom : ['',Validators.required],
    categorie : ['Légume',Validators.required],
    allergene : ['Aucun',Validators.required],
    unite : ['',Validators.required],
    quantite : ['',Validators.required],
    coutU : ['',Validators.required],
  })

  onSubmit(){
    console.log(this.creationIngredient.value)
  }

}
