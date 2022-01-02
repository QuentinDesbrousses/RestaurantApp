import {Injectable, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Ingredient} from "../models/ingredient";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  @Input() ingredient : Ingredient | undefined;
  @Input() update : boolean = false;

  IngredientForm : FormGroup;

  constructor(private http : HttpClient) {
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
    //creation Ingredient
    if(!this.update){
      let tmpIngredient = new Ingredient(this.IngredientForm.value);
    }
  }

  obtenirListeIngredients(){}

  creerIngredient(){

  }

  modifierIngredient(nom : string){}

  supprimerIngredient(){}

}
