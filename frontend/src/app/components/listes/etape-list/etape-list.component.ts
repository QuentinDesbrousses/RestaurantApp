import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ConfirmationFormComponent} from "../../forms/confirmation-form/confirmation-form.component";
import {Etape} from "../../../models/etape";
import {EtapeFormComponent} from "../../forms/etape-form/etape-form.component";
import {EtapeService} from "../../../services/etape/etape.service";

@Component({
  selector: 'app-etape-list',
  templateUrl: './etape-list.component.html',
  styleUrls: ['./etape-list.component.css']
})
export class EtapeListComponent implements OnInit, AfterViewInit {
  etapes : Etape[] = [];
  @Input() ingredients : string[] | undefined;
  displayedColumns = ['ID','Titre', 'Description','Ingredients','Temps', 'Cout','Modifier','Supprimer'];

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog : MatDialog,private service : EtapeService) {}

  ngOnInit() {
    this.etapes = this.service.getAllEtape();
  }
  ngAfterViewInit() {
    this.etapes = this.service.getAllEtape();
  }

  //CRUD Etape
  creerEtape(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "95%";
    dialogConfig.data = {type: "creation", ingredients : this.ingredients}
    this.dialog.open(EtapeFormComponent,dialogConfig);
    console.log("création étape");
  }

  modifierEtape(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "95%";
    dialogConfig.data = {type: "modification",id:id}
    this.dialog.open(EtapeFormComponent,dialogConfig);
    console.log("Etape n° "+id+" modifiée");
  }

  supprimerEtape(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {id: id,type:"etape"};
    this.dialog.open(ConfirmationFormComponent,dialogConfig);
    console.log("Etape n° "+id+" supprimée");
  }

  montrerIngredients(id: number) {
    //TODO
    console.log("Voici les étapes de la recette "+id);
  }

  refresh() : void {
    this.etapes = this.service.getAllEtape();
  }
}
