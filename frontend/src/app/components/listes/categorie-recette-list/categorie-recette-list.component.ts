import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ConfirmationFormComponent} from "../../forms/confirmation-form/confirmation-form.component";
import {CategorieRecette} from "../../../models/categorie-recette";
import {CategorieFormComponent} from "../../forms/categorie-form/categorie-form.component";
import {CategorieRecetteService} from "../../../services/categorie-recette/categorie-recette.service";

@Component({
  selector: 'app-categorie-recette-list',
  templateUrl: './categorie-recette-list.component.html',
  styleUrls: ['./categorie-recette-list.component.css']
})
export class CategorieRecetteListComponent implements OnInit{

  categories_recette : CategorieRecette[] = [];
  dataSource = new MatTableDataSource<CategorieRecette>();
  displayedColumns = ['ID','nom','modifier','supprimer'];

  @ViewChild(MatPaginator) paginator : MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog : MatDialog, private service : CategorieRecetteService) { }

  ngOnInit(): void {
    this.categories_recette = this.service.getAllCategorieRecette();
    console.log("categories_allergene: "+this.categories_recette)
  }

  //CRUD Recette
  creerCategorieRecette(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "creation",element:"ingredient"}
    this.dialog.open(CategorieFormComponent,dialogConfig);
    console.log("création catégorie recette");
  }

  modifierCategorieRecette(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "modification",element:"ingredient",id:id}
    this.dialog.open(CategorieFormComponent,dialogConfig);
    console.log("Catégorie de recette n° "+id+" modifié");
  }

  supprimerCategorieRecette(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {id: id,type:"categorie-recette"};
    this.dialog.open(ConfirmationFormComponent,dialogConfig);
    console.log("Catégorie de recette n° "+id+" supprimé");
  }

}
