import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../../models/ingredient";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {IngredientFormComponent} from "../../forms/ingredient-form/ingredient-form.component";
import {ConfirmationFormComponent} from "../../forms/confirmation-form/confirmation-form.component";
import {AllergeneFormComponent} from "../../forms/allergene-form/allergene-form.component";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {AllergenesComponent} from "../../../pages/allergenes/allergenes.component";
import {Allergene} from "../../../models/allergene";

@Component({
  selector: 'app-allergene-list',
  templateUrl: './allergene-list.component.html',
  styleUrls: ['./allergene-list.component.css']
})
export class AllergeneListComponent implements OnInit,AfterViewInit {
  @Input() allergenes : Allergene[] | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  //CRUD Allergene
  creerAllergene(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "creation"}
    this.dialog.open(AllergeneFormComponent,dialogConfig);
    console.log("création allergene");
  }
  modifierAllergene(id:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "modification",id:id}
    this.dialog.open(AllergeneFormComponent,dialogConfig);
    console.log("Allergène n° "+id+" modifié");
  }
  supprimerAllergene(id:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {id: id,type:"allergene"};
    this.dialog.open(ConfirmationFormComponent,dialogConfig);
    console.log("Allergène n° "+id+" supprimé");
  }

}
