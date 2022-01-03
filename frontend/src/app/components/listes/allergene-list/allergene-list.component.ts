import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ConfirmationFormComponent} from "../../forms/confirmation-form/confirmation-form.component";
import {AllergeneFormComponent} from "../../forms/allergene-form/allergene-form.component";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {Allergene} from "../../../models/allergene";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-allergene-list',
  templateUrl: './allergene-list.component.html',
  styleUrls: ['./allergene-list.component.css']
})
export class AllergeneListComponent implements OnInit,AfterViewInit {
  @Input() allergenes : Allergene[] | undefined;
  dataSource = new MatTableDataSource<Allergene>();
  displayedColumns2 = ['ID','nom', 'categorie','modifier','supprimer'];

  @ViewChild(MatPaginator) paginator : MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog : MatDialog) { }

  ngOnInit(): void {
    if(this.allergenes){
      this.dataSource = new MatTableDataSource<Allergene>(this.allergenes);
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
