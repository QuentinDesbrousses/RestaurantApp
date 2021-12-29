import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  IngredientForm : FormGroup;

  constructor() {
    this.IngredientForm  = new FormGroup({
      $id : new FormControl(null),
      nom : new FormControl('',Validators.required),
      categorie : new FormControl('Légume',Validators.required),
      allergene : new FormControl('Aucun',Validators.required),
      unite : new FormControl('',Validators.required),
      quantite : new FormControl('',Validators.required),
      coutU : new FormControl('',Validators.required)
    });
  }

  onSubmit(){
    console.log(this.IngredientForm.value)
  }

  obtenirListeIngredients(){}

  creerIngredient(){}

  modifierIngredient(nom : string){}

  supprimerIngredient(){}

}
