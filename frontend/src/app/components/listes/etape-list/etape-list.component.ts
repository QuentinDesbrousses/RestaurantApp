import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../../models/ingredient";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ConfirmationFormComponent} from "../../forms/confirmation-form/confirmation-form.component";
import {Etape} from "../../../models/etape";
import {EtapeFormComponent} from "../../forms/etape-form/etape-form.component";

@Component({
  selector: 'app-etape-list',
  templateUrl: './etape-list.component.html',
  styleUrls: ['./etape-list.component.css']
})
export class EtapeListComponent implements OnInit, AfterViewInit {
  @Input() etapes : Etape[] | undefined;
  @Input() ingredients : string[] | undefined;
  displayedColumns = ['ID','titre', 'description','ingredients','temps', 'cout','modifier','supprimer'];
  dataSource = new MatTableDataSource<Etape>();

  @ViewChild(MatPaginator) paginator : MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog : MatDialog) {}

  ngOnInit() {
    if(this.etapes){
      this.dataSource = new MatTableDataSource<Etape>(this.etapes);
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

  //CRUD Etape
  creerEtape(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {type: "creation", ingredients : this.ingredients}
    this.dialog.open(EtapeFormComponent,dialogConfig);
    console.log("création étape");
  }
  modifierEtape(id:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {type: "modification", ingredients : this.ingredients,id:id}
    this.dialog.open(EtapeFormComponent,dialogConfig);
    console.log("Etape n° "+id+" modifiée");
  }
  supprimerEtape(id:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {id: id,type:"etape"};
    this.dialog.open(ConfirmationFormComponent,dialogConfig);
    console.log("Etape n° "+id+" supprimée");
  }

  montrerIngredients(id : string) {
    //TODO
    console.log("Voici les étapes de la recette "+id);
  }
}
