import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EtapeService} from "../../../services/etape/etape.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {Etape} from "../../../models/etape";

@Component({
  selector: 'app-etape-form',
  templateUrl: './etape-form.component.html',
  styleUrls: ['./etape-form.component.css']
})
export class EtapeFormComponent {
  EtapeForm : FormGroup;
  IngredientForm : FormGroup;
  IngredientSelectedForm : FormGroup;
  ingredientSelected = [""];

  constructor(public service : EtapeService, public dialogRef: MatDialogRef<EtapeFormComponent>, @Inject(MAT_DIALOG_DATA) public data: {type: string, ingredients : string, id:string }) {
    this.EtapeForm = new FormGroup({
      $id : new FormControl("null"),
      titre : new FormControl('',Validators.required),
      description : new FormControl('Sans description'),
      ingredients : new FormControl('Aucun',Validators.required),
      temps : new FormControl('',Validators.required)
    });
    this.IngredientForm = new FormGroup({
      selectIngredient : new FormControl("",Validators.required)
    });
    this.IngredientSelectedForm = new FormGroup({
      unselectIngredient : new FormControl("")
    });
  }

  // Drag & Drop etapes
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.ingredientSelected, event.previousIndex, event.currentIndex);
  }

  selectIngredient(){
    if(this.ingredientSelected[0] != ""){
      this.ingredientSelected.push(this.IngredientForm.value.selectIngredient);
    }
    else {
      this.ingredientSelected = [this.EtapeForm.value.unselectIngredient]
    }
    console.log(this.ingredientSelected);
  }

  unselectIngredient(){
    console.log("unselect etape");
    this.ingredientSelected.pop()
  }

  onSubmit(){
    let tmpEtape = new Etape(this.EtapeForm.value.id,
        this.EtapeForm.value.titre,
        this.EtapeForm.value.description,
        this.EtapeForm.value.temps,
        this.EtapeForm.value.cout
    );
    if(this.data.type=="creation"){
      this.service.createEtape(tmpEtape);
      console.log("Ingredient créé : "+tmpEtape)
    }
    else if(this.data.type == "modification"){
      this.service.modifyEtape(this.EtapeForm.value.id,tmpEtape)
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
