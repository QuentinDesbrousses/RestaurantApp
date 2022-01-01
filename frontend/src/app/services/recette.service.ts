import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  RecetteForm : FormGroup;
  EtapeForm : FormGroup;
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
    })
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

  getRecettes(){}

  setRecette(id : string){}
}
