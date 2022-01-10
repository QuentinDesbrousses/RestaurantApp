import {Component, Inject, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {RecetteService} from "../../../services/recette/recette.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Recette} from "../../../models/recette";
import {Etape} from "../../../models/etape";
import {CategorieRecette} from "../../../models/categorie-recette";
import {CategorieRecetteService} from "../../../services/categorie-recette/categorie-recette.service";
import {EtapeService} from "../../../services/etape/etape.service";

@Component({
  selector: 'app-recette-form',
  templateUrl: './recette-form.component.html',
  styleUrls: ['./recette-form.component.css']
})
export class RecetteFormComponent implements OnInit{
  RecetteForm : FormGroup;
  EtapeForm : FormGroup;
  EtapeRecetteForm : FormGroup;
  EtapeSelectedForm : FormGroup;
  etapeSelected : string[] = [];
  etapes : Etape[] = [];
  recettes : Recette[] = [];
  categories : CategorieRecette[] = [];

  constructor(public service : RecetteService,
              private serviceEtape : EtapeService,
              private serviceCat : CategorieRecetteService,
              public dialogRef: MatDialogRef<RecetteFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {type: string, id:string }) {
    this.RecetteForm = new FormGroup({
      $id : new FormControl(null),
      titre : new FormControl('',Validators.required),
      description : new FormControl('Sans description'),
      etapes : new FormControl(''),
      categorie : new FormControl('',Validators.required),
      nbCouvert : new FormControl('',Validators.required)
    });
    this.EtapeForm = new FormGroup({
      selectEtape : new FormControl("",Validators.required)
    });
    this.EtapeRecetteForm = new FormGroup({
      selectRecette : new FormControl("",Validators.required)
    })
    this.EtapeSelectedForm = new FormGroup({
      unselectEtape : new FormControl("")
    });
  }

  ngOnInit() {
    this.etapes = this.serviceEtape.getAllEtape();
    this.recettes = this.service.getAllRecettes();
    this.categories = this.serviceCat.getAllCategorieRecette();
  }
  // Drag & Drop etapes
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.etapeSelected, event.previousIndex, event.currentIndex);
  }

  selectEtape(){
    if(this.etapeSelected[0] != ""){
      this.etapeSelected.push(this.EtapeForm.value.selectEtape+":etape");
    }
    else {
      this.etapeSelected = [this.EtapeForm.value.selectEtape+":etape"]
    }
    console.log(this.etapeSelected);
  }

  selectRecette(){
    if(this.etapeSelected[0] != ""){
      this.etapeSelected.push(this.EtapeRecetteForm.value.selectRecette+":recette");
    }
    else {
      this.etapeSelected = [this.EtapeRecetteForm.value.selectRecette+":recette"]
    }
    console.log(this.etapeSelected);
  }

  unselectEtape(){
    console.log("unselect etape");
    this.etapeSelected.pop()
  }

  onSubmit(){
    //get categorie id
    var cat : number = 0;
    this.categories.forEach(c=>{if(c.getNom()==this.RecetteForm.value.categorie){cat = c.getId()}})
    //get etapes et recettes
    var etapes_incluses = [{}];
    var recettes_incluses = [{}];
    var i = 0;
    this.etapeSelected.forEach(e=>{
      let l = e.split(':');
      var id = 0;
      if(l[1]=="etape"){
        this.etapes.forEach(et=>{if(l[0]==et.getTitre()){id = et.getId()}});
        etapes_incluses.push({
          id_etape:id,
          place:i
        });
        i++;
      }
      else if(l[1]=="recette"){
        this.recettes.forEach(r=>{if(l[0]==r.getTitre()){id = r.getId()}});
        recettes_incluses.push({
          id_recette:id,
          place:i
        });
        i++;
      }
      else{
      }
    });

    let tmpRecette = {
      id_categorie:cat,
      titre_recette:this.RecetteForm.value.titre,
      description_recette:this.RecetteForm.value.description,
      nb_couvert:this.RecetteForm.value.nbCouvert,
      temps_recette:0,
      etapes_incluses:etapes_incluses,
      recettes_incluses:recettes_incluses
    }
    console.log(tmpRecette);

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
