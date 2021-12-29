import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  creationRecette : FormGroup;

  constructor() {
    this.creationRecette = new FormGroup({
      titre : new FormControl('',Validators.required),
      description : new FormControl('Sans description'),
      etapes : new FormControl('Ajouter une pincée de sel',Validators.required),
      categorie : new FormControl('Entrée',Validators.required),
      nbCouvert : new FormControl('',Validators.required),
      temps : new FormControl('',Validators.required)
    });
  }

  onSubmit(){
    console.log(this.creationRecette.value)
  }
}
