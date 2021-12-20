import {AfterViewInit, Component, Input, OnInit, ViewChild,} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {Ingredient} from "../../../models/ingredient";
import {Recette} from "../../../models/recette";

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.css']
})
export class RecetteListComponent implements OnInit {

  @Input() recettes : Recette[] | undefined;
  displayedColumns = ['id','titre', 'description', 'etapes', 'categorie','nbCouvert','temps','modifier','supprimer'];
  dataSource = new MatTableDataSource<Recette>();

  @ViewChild(MatPaginator) paginator : MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

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

  modifierRecette(id:string){
    //TODO Link the controller
    console.log("recette n°"+id+" modifiée")
  }

  supprimerRecette(id:string){
    //TODO Link the controller
    console.log("recette n°"+id+" supprimée")
  }

  creerRecette(){
    //TODO Link the controller
    console.log("recette créée")
  }
}
