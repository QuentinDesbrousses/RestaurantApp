import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ConfirmationFormComponent} from "../../forms/confirmation-form/confirmation-form.component";
import {CategorieIngredient} from "../../../models/categorie-ingredient";
import {CategorieFormComponent} from "../../forms/categorie-form/categorie-form.component";
import {CategorieIngredientService} from "../../../services/categorie-ingredient/categorie-ingredient.service";

@Component({
  selector: 'app-categorie-ingredient-list',
  templateUrl: './categorie-ingredient-list.component.html',
  styleUrls: ['./categorie-ingredient-list.component.css']
})
export class CategorieIngredientListComponent implements OnInit,AfterViewInit{

  categories_ingredient : CategorieIngredient[] = [];
  displayedColumns = ['ID','NOM','Modifier','Supprimer'];

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog : MatDialog,private service : CategorieIngredientService) { }

  ngOnInit(): void {
    this.categories_ingredient = this.service.getAllCategorieIngredient();
    console.log("categories_allergene: "+this.categories_ingredient)
  }

  ngAfterViewInit(): void {
    this.categories_ingredient = this.service.getAllCategorieIngredient();
    console.log("categories_allergene: "+this.categories_ingredient)
  }


  //CRUD Allergene
  creerCategorieIngredient(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "creation",element:"ingredient"}
    this.dialog.open(CategorieFormComponent,dialogConfig);
  }

  modifierCategorieIngredient(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "modification",element:"ingredient",id:id}
    this.dialog.open(CategorieFormComponent,dialogConfig);
  }

    supprimerCategorieIngredient(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {id: id,type:"categorie-ingredient"};
    this.dialog.open(ConfirmationFormComponent,dialogConfig);
  }

  refresh() : void {
    this.categories_ingredient = this.service.getAllCategorieIngredient();
  }

}
