import {AfterViewInit, Component, Input, OnInit, ViewChild,} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {Recette} from "../../../models/recette";
import {MatDialog,MatDialogConfig} from "@angular/material/dialog";
import {RecetteFormComponent} from "../../forms/recette-form/recette-form.component";
import {ConfirmationFormComponent} from "../../forms/confirmation-form/confirmation-form.component";

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.css']
})
export class RecetteListComponent implements OnInit, AfterViewInit {

  @Input() recettes : Recette[] | undefined;
  displayedColumns = ['id','titre', 'description', 'etapes', 'categorie','nbCouvert','temps','Fiche technique','modifier','supprimer'];
  dataSource = new MatTableDataSource<Recette>();

  categories = ["Entrée","Plat principal","Dessert"];
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

  @ViewChild(MatPaginator) paginator : MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog : MatDialog) {}

  ngOnInit() {
    if(this.recettes){
      this.dataSource = new MatTableDataSource<Recette>(this.recettes);
    }
  }
  ngAfterViewInit() {
    if (this.paginator){
      this.dataSource.paginator = this.paginator;
    }
    if(this.sort){
      this.dataSource.sort = this.sort;
    }
  }

  montrerEtapes(id:string){
    //TODO Use modal component and link the controller
    console.log("Voici les étapes de la recette "+id);
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ficheTechnique(id : string){
    console.log("Génération d'une fiche technique pour la recette n° "+id)
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

  modifierRecette(id:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "95%";
    dialogConfig.data = {type:"modification",id:id,categories:this.categories,etapes:this.etapes}
    this.dialog.open(RecetteFormComponent,dialogConfig);
    console.log("recette n°"+id+" modifiée")
  }

  supprimerRecette(id:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {id: id, type:"recette"};
    this.dialog.open(ConfirmationFormComponent,dialogConfig);
    console.log("recette n°"+id+" supprimée")
  }

}
