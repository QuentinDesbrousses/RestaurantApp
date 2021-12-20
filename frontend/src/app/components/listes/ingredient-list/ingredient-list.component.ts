import {AfterViewInit, Component, Input, OnInit, ViewChild,} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from '@angular/material/table';
import {Ingredient} from "../../../models/ingredient";
import {Unite} from "../../../models/unite";
/*
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
*/
export interface IngredientInterface {
  nom: string;
  categorie: string;
  allergene: string;
  unite: string;
  quantite: number;
  coutU: number;
}

const ELEMENT_DATA2: IngredientInterface[] = [
  {nom:'Poivron',categorie:'Légume',allergene:'Aucun',unite:'kg',quantite:3,coutU:5}
];

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements AfterViewInit, OnInit{
  @Input() ingredients : IngredientInterface[] | undefined;
  displayedColumns = ['nom', 'categorie', 'allergene', 'unite','quantite','coutU','modifier','supprimer'];
  dataSource = new MatTableDataSource<IngredientInterface>();

  @ViewChild(MatPaginator) paginator : MatPaginator | undefined;

  ngOnInit() {
    if(this.ingredients){
      this.dataSource = new MatTableDataSource<IngredientInterface>(this.ingredients);
    }
  }
  ngAfterViewInit() {
    if (this.paginator){
      this.dataSource.paginator = this.paginator;
    }
  }

  modifierIngredient(id:string){
    console.log(id);
  }

  supprimerIngredient(id:string){
    console.log(id);
  }

}
