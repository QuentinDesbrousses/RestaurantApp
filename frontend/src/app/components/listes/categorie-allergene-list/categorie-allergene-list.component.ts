import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ConfirmationFormComponent} from "../../forms/confirmation-form/confirmation-form.component";
import {CategorieAllergene} from "../../../models/categorie-allergene";
import {CategorieFormComponent} from "../../forms/categorie-form/categorie-form.component";

@Component({
  selector: 'app-categorie-allergene-list',
  templateUrl: './categorie-allergene-list.component.html',
  styleUrls: ['./categorie-allergene-list.component.css']
})
export class CategorieAllergeneListComponent implements OnInit, AfterViewInit {

  @Input() categories_allergene : CategorieAllergene[] | undefined;
  dataSource = new MatTableDataSource<CategorieAllergene>();
  displayedColumns = ['ID','nom','modifier','supprimer'];

  @ViewChild(MatPaginator) paginator : MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog : MatDialog) { }

  ngOnInit(): void {
    if(this.categories_allergene){
      this.dataSource = new MatTableDataSource<CategorieAllergene>(this.categories_allergene);
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

  //CRUD Catégorie allergène
  creerCategorieAllergene(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "creation",element:"allergene"}
    this.dialog.open(CategorieFormComponent,dialogConfig);
    console.log("création catégorie allergene");
  }
  modifierCategorieAllergene(id:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "modification",element:"allergene",id:id}
    this.dialog.open(CategorieFormComponent,dialogConfig);
    console.log("Catégorie d'allergène n° "+id+" modifié");
  }
  supprimerCategorieAllergene(id:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {id: id,type:"categorie-allergene"};
    this.dialog.open(ConfirmationFormComponent,dialogConfig);
    console.log("Catégorie d'allergène n° "+id+" supprimé");
  }
}
