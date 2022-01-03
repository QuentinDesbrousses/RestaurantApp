import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  RecetteForm : FormGroup;
  EtapeForm : FormGroup;
  EtapeSelectedForm : FormGroup;
  etapeSelected = [""];


  constructor() {
    this.RecetteForm = new FormGroup({
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

  onSubmit(){
    console.log(this.RecetteForm.value)
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

  getRecettes(){}

  setRecette(id : string){}
}
