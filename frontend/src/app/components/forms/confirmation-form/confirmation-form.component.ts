import {Component, Inject} from '@angular/core';
import {IngredientService} from "../../../services/ingredient/ingredient.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {RecetteService} from "../../../services/recette/recette.service";

@Component({
  selector: 'app-confirmation-form',
  templateUrl: './confirmation-form.component.html',
  styleUrls: ['./confirmation-form.component.css']
})
export class ConfirmationFormComponent {
  confirmationForm : FormGroup;

  constructor(private ingredientService : IngredientService, private recetteService : RecetteService, public dialogRef: MatDialogRef<ConfirmationFormComponent>, @Inject(MAT_DIALOG_DATA) public data: {id:string, type:string}) {
    this.confirmationForm  = new FormGroup({
      $id : new FormControl(null)
    })
  }

  supprimer(){
    if(this.data.type == "ingredient"){
      this.ingredientService.deleteIngredient(this.data.id)
      console.log("Confirmation de suppression de l'ingrédient : "+this.data.id);
    }
    else if(this.data.type == "recette"){
      this.recetteService.deleteRecette(this.data.id)
      console.log("Confirmation de suppression de la recette : "+this.data.id);
    }
    else{

    }

  }

  cancel(){
    this.dialogRef.close();
  }
}
