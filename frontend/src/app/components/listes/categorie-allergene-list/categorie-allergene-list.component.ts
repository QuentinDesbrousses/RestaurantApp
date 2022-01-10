import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ConfirmationFormComponent} from "../../forms/confirmation-form/confirmation-form.component";
import {CategorieAllergene} from "../../../models/categorie-allergene";
import {CategorieFormComponent} from "../../forms/categorie-form/categorie-form.component";
import {CategorieAllergeneService} from "../../../services/categorie-allergene/categorie-allergene.service";

@Component({
  selector: 'app-categorie-allergene-list',
  templateUrl: './categorie-allergene-list.component.html',
  styleUrls: ['./categorie-allergene-list.component.css']
})
export class CategorieAllergeneListComponent implements OnInit, AfterViewInit {

  categories_allergene : CategorieAllergene[] = [];
  displayedColumns = ['ID','NOM','Modifier','Supprimer'];

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog : MatDialog, private service : CategorieAllergeneService) { }

  ngOnInit(): void {
    this.categories_allergene = this.service.getAllCategorieAllergene();
    console.log("categories_allergene: "+this.categories_allergene)
  }
  ngAfterViewInit(): void {
    this.categories_allergene = this.service.getAllCategorieAllergene();
    console.log("categories_allergene: "+this.categories_allergene)
  }

  //CRUD Catégorie allergène
  creerCategorieAllergene(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "creation",element:"allergene"}
    let req = this.dialog.open(CategorieFormComponent,dialogConfig);
    if(req){
      this.refresh();
      console.log("création catégorie allergene");
    }
    else{
      console.log("Abandon")
    }

  }
  modifierCategorieAllergene(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "modification",element:"allergene",id:id}
    let req = this.dialog.open(CategorieFormComponent,dialogConfig);
    if(req){
      this.refresh();
      console.log("Catégorie d'allergène n° "+id+" modifié");
    }
    else{
      console.log("Abandon")
    }

  }
  supprimerCategorieAllergene(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {id: id,type:"categorie-allergene"};
    let req = this.dialog.open(ConfirmationFormComponent,dialogConfig);
    if(req){
      this.refresh();
      console.log("Catégorie d'allergène n° "+id+" supprimé");
    }
    else{
      console.log("Abandon")
    }

  }

  refresh() : void {
    this.categories_allergene = this.service.getAllCategorieAllergene();
  }
}
