import {AfterViewInit, Component, Input, OnInit, ViewChild,} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {Ingredient} from "../../../models/ingredient";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements AfterViewInit, OnInit{
  @Input() ingredients : Ingredient[] | undefined;
  displayedColumns = ['nom', 'categorie', 'allergene', 'unite','quantite','coutU','modifier','supprimer'];
  dataSource = new MatTableDataSource<Ingredient>();

  @ViewChild(MatPaginator) paginator : MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit() {
    if(this.ingredients){
      this.dataSource = new MatTableDataSource<Ingredient>(this.ingredients);
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

  modifierIngredient(id:string){
    //TODO Link with form
    console.log(id+" modifié");
  }

  supprimerIngredient(id:string){
    //TODO Link with controller
    console.log(id+" supprimé");
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
}
