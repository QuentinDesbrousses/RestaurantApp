import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Ingredient} from "../../../models/ingredient";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IngredientService} from "../../../services/ingredient/ingredient.service";

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent {
  IngredientForm : FormGroup;

  constructor(public service : IngredientService, public dialogRef: MatDialogRef<IngredientFormComponent>,@Inject(MAT_DIALOG_DATA) public data: {id:string,type: string, categories : string[],allergenes : string[] }) {
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
    let tmpIngredient = new Ingredient(
        this.IngredientForm.value.id,
        this.IngredientForm.value.nom,
        this.IngredientForm.value.categorie,
        this.IngredientForm.value.unite,
        this.IngredientForm.value.quantite,
        this.IngredientForm.value.coutU,
        this.IngredientForm.value.allergene
        );
    if(this.data.type == "creation"){
      this.service.createIngredient(tmpIngredient);
      console.log("Ingredient créé : "+tmpIngredient)
    }
    else if(this.data.type == "modification"){
      this.service.modifyIngredient(this.IngredientForm.value.id,tmpIngredient)
    }
    else{
      console.log("data.type doit être égal à creation ou modification")
    }
    this.dialogRef.close();
  }
  cancel(){
    this.dialogRef.close();
  }
}
