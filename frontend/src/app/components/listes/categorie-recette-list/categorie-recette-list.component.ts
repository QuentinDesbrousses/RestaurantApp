import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CategorieAllergene} from "../../../models/categorie-allergene";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CategorieAllergeneFormComponent} from "../../forms/categorie-allergene-form/categorie-allergene-form.component";
import {ConfirmationFormComponent} from "../../forms/confirmation-form/confirmation-form.component";
import {CategorieRecette} from "../../../models/categorie-recette";
import {CategorieRecetteFormComponent} from "../../forms/categorie-recette-form/categorie-recette-form.component";

@Component({
  selector: 'app-categorie-recette-list',
  templateUrl: './categorie-recette-list.component.html',
  styleUrls: ['./categorie-recette-list.component.css']
})
export class CategorieRecetteListComponent implements OnInit, AfterViewInit {

  @Input() categories_recette : CategorieRecette[] | undefined;
  dataSource = new MatTableDataSource<CategorieRecette>();
  displayedColumns = ['ID','nom','modifier','supprimer'];

  @ViewChild(MatPaginator) paginator : MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog : MatDialog) { }

  ngOnInit(): void {
    if(this.categories_recette){
      this.dataSource = new MatTableDataSource<CategorieRecette>(this.categories_recette);
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

  //CRUD Recette
  creerCategorieRecette(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "creation"}
    this.dialog.open(CategorieRecetteFormComponent,dialogConfig);
    console.log("création catégorie recette");
  }
  modifierCategorieRecette(id:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "modification",id:id}
    this.dialog.open(CategorieRecetteFormComponent,dialogConfig);
    console.log("Catégorie de recette n° "+id+" modifié");
  }
  supprimerCategorieRecette(id:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {id: id,type:"categorie-recette"};
    this.dialog.open(ConfirmationFormComponent,dialogConfig);
    console.log("Catégorie de recette n° "+id+" supprimé");
  }

}
