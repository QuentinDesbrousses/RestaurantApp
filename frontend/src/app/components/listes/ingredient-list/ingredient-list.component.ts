import {AfterViewInit, Component, Input, OnInit, ViewChild,} from '@angular/core';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {Ingredient} from "../../../models/ingredient";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {IngredientFormComponent} from "../../forms/ingredient-form/ingredient-form.component";
import {ConfirmationFormComponent} from "../../forms/confirmation-form/confirmation-form.component";
import {IngredientService} from "../../../services/ingredient/ingredient.service";




@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit,AfterViewInit{
  ingredients : Ingredient[] = [];
  displayedColumns = ['ID','NOM', 'CATEGORIE', 'ALLERGENE', 'UNITE','QUANTITE','COUT UNITAIRE','Modifier','Supprimer'];

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog : MatDialog, private service : IngredientService) {}

  ngOnInit() {
    this.ingredients = this.service.getAllIngredients();
    console.log("ingredients: "+this.ingredients)
  }

  ngAfterViewInit() {
    this.ingredients = this.service.getAllIngredients();
    console.log("ingredients: "+this.ingredients)
  }

  //CRUD Ingredient
  creerIngredient(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "creation"}
    this.dialog.open(IngredientFormComponent,dialogConfig);
    console.log("création ingrédient");
  }

  modifierIngredient(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "modification",id:id}
    this.dialog.open(IngredientFormComponent,dialogConfig);
    console.log("Ingrédient n° "+id+" modifié");
  }

  supprimerIngredient(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {id: id,type:"ingredient"};
    this.dialog.open(ConfirmationFormComponent,dialogConfig);
    console.log("Ingrédient n° "+id+" supprimé");
  }

  refresh() : void {
    this.ingredients = this.service.getAllIngredients();
  }
}
