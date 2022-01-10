import {AfterViewInit, Component,OnInit} from '@angular/core';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {Recette} from "../../../models/recette";
import {MatDialog,MatDialogConfig} from "@angular/material/dialog";
import {RecetteFormComponent} from "../../forms/recette-form/recette-form.component";
import {ConfirmationFormComponent} from "../../forms/confirmation-form/confirmation-form.component";
import {FicheTechniqueComponent} from "../../../pages/fiche-technique/fiche-technique.component";
import {RecetteService} from "../../../services/recette/recette.service";
import {CategorieRecette} from "../../../models/categorie-recette";
import {CategorieRecetteService} from "../../../services/categorie-recette/categorie-recette.service";
import { Etape } from 'src/app/models/etape';

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.css']
})
export class RecetteListComponent implements OnInit, AfterViewInit {

  displayedColumns = ['ID','Titre', 'Description','Etapes','Catégorie','Couverts','Temps','Fiche technique','modifier','supprimer'];
  categories : CategorieRecette[] = [];
  recettes : Recette[] = [];

  etapes = [
    "Ajouter le sucre",
    "Ajouter une pincée de sel",
    "Monter les oeufs en neige",
    "Faire fondre le beurre",
    "Beurrer le moule",
    "Faire préchauffer le four à 200°C",
    "Laisser reposer 15 minutes",
    "Mettre au frais pendant 6 heures"
  ];
  et: any;

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog : MatDialog, private service : RecetteService, private catService : CategorieRecetteService) {}

  ngOnInit() {
    this.categories = this.catService.getAllCategorieRecette();
    this.recettes = this.service.getAllRecettes();
  }

  ngAfterViewInit() {
    this.recettes = this.service.getAllRecettes();
  }

  montrerEtapes(id:number){
    //TODO Use modal component and link the controller
    console.log("Voici les étapes de la recette "+id);
  }

  ficheTechnique(id : number){
    var recette : Recette = new Recette(0,0,0,"","",0,0);
    this.recettes.forEach(r=>{
      if(id==r.getId()){
        recette = r;
      }
    })
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.data = {recette:recette}
    this.dialog.open(FicheTechniqueComponent,dialogConfig);
  }

  // CRUD Recette
  creerRecette(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "95%";
    dialogConfig.data = {type:"creation",categories:this.categories,etapes:this.etapes}
    this.dialog.open(RecetteFormComponent,dialogConfig);
    console.log("recette créée")
  }

  modifierRecette(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "95%";
    dialogConfig.data = {type:"modification",id:id,categories:this.categories,etapes:this.etapes}
    this.dialog.open(RecetteFormComponent,dialogConfig);
    console.log("recette n°"+id+" modifiée")
  }

  supprimerRecette(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {id: id, type:"recette"};
    this.dialog.open(ConfirmationFormComponent,dialogConfig);
    console.log("recette n°"+id+" supprimée")
  }
  refresh() : void {
    this.recettes = this.service.getAllRecettes();
  }
}
