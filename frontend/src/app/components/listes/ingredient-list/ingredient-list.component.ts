import {AfterViewInit, Component, Input, OnInit, ViewChild,} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {Ingredient} from "../../../models/ingredient";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {IngredientFormComponent} from "../../forms/ingredient-form/ingredient-form.component";
import {ConfirmationFormComponent} from "../../forms/confirmation-form/confirmation-form.component";
import {IngredientService} from "../../../services/ingredient/ingredient.service";



@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements AfterViewInit, OnInit{
  @Input() ingredients : Ingredient[] | undefined;
  displayedColumns = ['nom', 'categorie', 'allergene', 'unite','quantite','coutU','modifier','supprimer'];
  dataSource = new MatTableDataSource<Ingredient>();
  categories = ['Légume','Fruit','Fromage','Céréale','Crudité'];
  allergenes = ['Aucun',
    'Arachide',
    'Céleri',
    'Crabe','Crevette','Écrevisse','Homard','Langoustine',
    'Avoine','Blé','Épeautre','Kamut et leurs souches hybridées','Orge','Seigle',
    'Amande','Noisette','Noix','Noix du Brésil','Noix de Cajou','Noix de macadamia','Noix de pécan','Noix de Queensland','Pistache',
    'Lactose',
    'Lupin',
    'Oeuf',
    'Poisson',
    'Bulot','Calamar','Escargot','Huitre','Moule','Palourde','Pétoncle','Pieuvre',
    'Moutarde',
    'Sésame',
    'Soja',
    'Sulfites'
  ];

  @ViewChild(MatPaginator) paginator : MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog : MatDialog) {}

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

  //CRUD Ingredient
  creerIngredient(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "creation", allergenes : this.allergenes, categories : this.categories}
    this.dialog.open(IngredientFormComponent,dialogConfig);
    console.log("création ingrédient");
  }
  modifierIngredient(id:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {type: "modification", allergenes : this.allergenes, categories : this.categories,id:id}
    this.dialog.open(IngredientFormComponent,dialogConfig);
    console.log("Ingrédient n° "+id+" modifié");
  }
  supprimerIngredient(id:string){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {id: id,type:"ingredient"};
    this.dialog.open(ConfirmationFormComponent,dialogConfig);
    console.log("Ingrédient n° "+id+" supprimé");
  }
}
