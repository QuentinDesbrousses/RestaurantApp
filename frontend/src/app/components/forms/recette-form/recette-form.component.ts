import {Component, Input} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-recette-form',
  templateUrl: './recette-form.component.html',
  styleUrls: ['./recette-form.component.css']
})
export class RecetteFormComponent {
  @Input() etapes = [""];
  @Input() categories = [""];

  constructor(private fb: FormBuilder) { }

  creationRecette = this.fb.group({
    titre : ['',Validators.required],
    description : ['Sans description'],
    etapes : ['Ajouter une pincée de sel',Validators.required],
    categorie : ['Entrée',Validators.required],
    nbCouvert : ['',Validators.required],
    temps : ['',Validators.required],
  })

  onSubmit(){
    console.log(this.creationRecette.value)
  }

}
