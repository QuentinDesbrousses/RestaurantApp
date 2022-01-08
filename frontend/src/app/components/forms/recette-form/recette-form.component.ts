import {Component, Inject} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {RecetteService} from "../../../services/recette/recette.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Recette} from "../../../models/recette";
import {Etape} from "../../../models/etape";
import {CategorieRecette} from "../../../models/categorie-recette";

@Component({
  selector: 'app-recette-form',
  templateUrl: './recette-form.component.html',
  styleUrls: ['./recette-form.component.css']
})
export class RecetteFormComponent {
  RecetteForm : FormGroup;
  EtapeForm : FormGroup;
  EtapeSelectedForm : FormGroup;
  etapeSelected = [""];

  constructor(public service : RecetteService, public dialogRef: MatDialogRef<RecetteFormComponent>, @Inject(MAT_DIALOG_DATA) public data: {type: string, categories : CategorieRecette[],etapes : Etape[], id:string }) {
    this.RecetteForm = new FormGroup({
      $id : new FormControl(null),
      titre : new FormControl('',Validators.required),
      description : new FormControl('Sans description'),
      etapes : new FormControl('Ajouter une pincée de sel',Validators.required),
      categorie : new FormControl('Entrée',Validators.required),
      nbCouvert : new FormControl('',Validators.required),
      temps : new FormControl('',Validators.required)
    });
    this.EtapeForm = new FormGroup({
      selectEtape : new FormControl("",Validators.required)
    });
    this.EtapeSelectedForm = new FormGroup({
      unselectEtape : new FormControl("")
    });
  }

  // Drag & Drop etapes
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.etapeSelected, event.previousIndex, event.currentIndex);
  }

  selectEtape(){
    if(this.etapeSelected[0] != ""){
      this.etapeSelected.push(this.EtapeForm.value.selectEtape);
    }
    else {
      this.etapeSelected = [this.EtapeForm.value.selectEtape]
    }
    console.log(this.etapeSelected);
  }

  unselectEtape(){
    console.log("unselect etape");
    this.etapeSelected.pop()
  }

  onSubmit(){
    let tmpRecette = new Recette(
        this.RecetteForm.value.id,
        this.RecetteForm.value.titre,
        this.RecetteForm.value.description,
        this.RecetteForm.value.categorie,
        this.RecetteForm.value.nbCouvert,
        this.RecetteForm.value.temps,
        this.RecetteForm.value.etapes
    );
    if(this.data.type=="creation"){
      this.service.createRecette(tmpRecette);
      console.log("Ingredient créé : "+tmpRecette)
    }
    else if(this.data.type == "modification"){
      this.service.modifyRecette(this.RecetteForm.value.id,tmpRecette)
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
