import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategorieAllergene} from "../../../models/categorie-allergene";
import {CategorieAllergeneService} from "../../../services/categorie-allergene/categorie-allergene.service";
import {CategorieIngredientService} from "../../../services/categorie-ingredient/categorie-ingredient.service";
import {CategorieRecette} from "../../../models/categorie-recette";
import {CategorieRecetteService} from "../../../services/categorie-recette/categorie-recette.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategorieIngredient} from "../../../models/categorie-ingredient";

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.css']
})
export class CategorieFormComponent implements  OnInit{
  CategorieForm : FormGroup;
  currentCategorie : CategorieIngredient | CategorieAllergene | CategorieRecette | undefined;

  constructor(public catAllergeneService : CategorieAllergeneService,
              public catIngredientService : CategorieIngredientService,
              public catRecetteService : CategorieRecetteService,
              public dialogRef: MatDialogRef<CategorieFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {id:number,type: string,element:string}) {
    this.CategorieForm = new FormGroup({
      $id : new FormControl(this.currentCategorie?.getId),
      nom : new FormControl(this.currentCategorie?.getNom,Validators.required)
    })
  }

  ngOnInit() {
    if(this.data.type == "modification"){
      console.log("debut on init de catégorie form")
      if(this.data.element == "ingredient"){
        this.currentCategorie = this.catIngredientService.getCategorieIngredient(this.data.id);
      }
      else if(this.data.element == "allergene"){
        this.currentCategorie = this.catAllergeneService.getCategorieAllergene(this.data.id);
      }
      else if (this.data.element == "recette"){
        this.catRecetteService.getCategorieRecette(this.data.id).subscribe(
            (data) => this.currentCategorie = new CategorieRecette(data.getId(),data.getNom()));
      }
      else{
        console.log("data.element doit être égal à allergene, ingredient ou recette")
      }
    }
  }

  onSubmit(){
    if(this.data.type == "creation"){
      if(this.data.element == "allergene"){
        let tmpCatAllergene = new CategorieAllergene(this.CategorieForm.value.id,this.CategorieForm.value.nom)
        this.catAllergeneService.createCategorieAllergene(tmpCatAllergene);
        console.log("Catégorie Allergène créée : "+tmpCatAllergene)
      }
      else if(this.data.element == "ingredient"){
        let tmpCatIngredient = new CategorieIngredient(this.CategorieForm.value.id,this.CategorieForm.value.nom)
        this.catIngredientService.createCategorieIngredient(tmpCatIngredient);
        console.log("Catégorie Ingrédient créée : "+tmpCatIngredient)
      }
      else if(this.data.element == "recette"){
        let tmpCatRecette = new CategorieRecette(this.CategorieForm.value.id,this.CategorieForm.value.nom)
        this.catRecetteService.createCategorieRecette(tmpCatRecette);
        console.log("Catégorie Recette créée : "+tmpCatRecette)
      }
      else{
        console.log("data.type doit être égal à creation ou modification")
      }
    }
    else if(this.data.type=="modification"){
      if(this.data.element == "allergene"){
        let tmpCatAllergene = new CategorieAllergene(this.CategorieForm.value.id,this.CategorieForm.value.nom)
        this.catAllergeneService.modifyCategorieAllergene(this.CategorieForm.value.id,tmpCatAllergene);
        console.log("Catégorie Allergène modifiée : "+tmpCatAllergene)
      }
      else if(this.data.element == "ingredient"){
        let tmpCatIngredient = new CategorieIngredient(this.CategorieForm.value.id,this.CategorieForm.value.nom)
        this.catIngredientService.modifyCategorieIngredient(this.CategorieForm.value.id,tmpCatIngredient);
        console.log("Catégorie Ingrédient modifiée : "+tmpCatIngredient)
      }
      else if(this.data.element == "recette"){
        let tmpCatRecette = new CategorieRecette(this.CategorieForm.value.id,this.CategorieForm.value.nom)
        this.catRecetteService.modifyCategorieRecette(this.CategorieForm.value.id,tmpCatRecette);
        console.log("Catégorie Recette modifiée : "+tmpCatRecette)
      }
      else{
        console.log("data.type doit être égal à creation ou modification")
      }
    }
    else{
      console.log("data.element doit être égal à allergene, ingredient ou recette")
    }
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }

}
