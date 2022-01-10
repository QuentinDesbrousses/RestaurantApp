import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ConfirmationFormComponent} from "../../forms/confirmation-form/confirmation-form.component";
import {AllergeneFormComponent} from "../../forms/allergene-form/allergene-form.component";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {Allergene} from "../../../models/allergene";
import {AllergeneService} from "../../../services/allergene/allergene.service";

@Component({
  selector: 'app-allergene-list',
  templateUrl: './allergene-list.component.html',
  styleUrls: ['./allergene-list.component.css']
})
export class AllergeneListComponent implements OnInit, AfterViewInit{
  allergenes : Allergene[] = [];
  //TODO changer ça
  categories = [
      1,
      "Fruit de mer",
      "Fruit à coque",
      "Gluten",
      "Oeuf"
  ]

  displayedColumns = ['ID','NOM', 'CATEGORIE','Modifier','Supprimer'];

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog : MatDialog,private service : AllergeneService) { }

  ngOnInit(): void {
    this.allergenes = this.service.getAllAllergene();
    console.log("categories_allergene: "+this.allergenes)
  }

  ngAfterViewInit(): void {
    this.allergenes = this.service.getAllAllergene();
    console.log("categories_allergene: "+this.allergenes)
  }

  //CRUD Allergene
  creerAllergene(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "creation"}
    this.dialog.open(AllergeneFormComponent,dialogConfig);
    console.log("création allergene");
  }

  modifierAllergene(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "modification",id:id}
    this.dialog.open(AllergeneFormComponent,dialogConfig);
    console.log("Allergène n° "+id+" modifié");
  }

  supprimerAllergene(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {id: id,type:"allergene"};
    this.dialog.open(ConfirmationFormComponent,dialogConfig);
    console.log("Allergène n° "+id+" supprimé");
  }

  refresh() : void {
    this.allergenes = this.service.getAllAllergene();
  }

}
