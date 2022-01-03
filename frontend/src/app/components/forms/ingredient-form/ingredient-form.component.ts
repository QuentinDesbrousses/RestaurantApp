import {Component, Inject, Input, OnInit} from '@angular/core';
import {IngredientService} from "../../../services/ingredient/ingredient.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Ingredient} from "../../../models/ingredient";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent {
  IngredientForm : FormGroup;

  constructor(public service : IngredientService, public dialogRef: MatDialogRef<IngredientFormComponent>,@Inject(MAT_DIALOG_DATA) public data: {type: string, categories : string[],allergenes : string[] }) {
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
    let tmpIngredient = new Ingredient(this.IngredientForm.value);
    if(this.data.type == "creation"){
      this.service.createIngredient(tmpIngredient);
      console.log("Ingredient créé : "+tmpIngredient)
    }
    else{
      this.service.modifyIngredient(this.IngredientForm.value.id,tmpIngredient)
    }
    this.dialogRef.close();
  }
  cancel(){
    this.dialogRef.close();
  }
}
