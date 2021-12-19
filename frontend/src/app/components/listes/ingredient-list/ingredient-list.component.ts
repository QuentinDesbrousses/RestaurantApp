import {AfterViewInit, Component, Input, ViewChild,} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from '@angular/material/table';
import {Ingredient} from "../../../models/ingredient";

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements AfterViewInit{
  @Input() ingredients = [Ingredient];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.ingredients)

  /*@ViewChild(MatPaginator) paginator: MatPaginator;*/

  ngAfterViewInit() {
   /* this.dataSource.paginator = this.paginator;*/
  }
}