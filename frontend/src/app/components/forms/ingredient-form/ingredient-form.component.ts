import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Ingredient} from "../../../models/ingredient";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IngredientService} from "../../../services/ingredient/ingredient.service";
import { CategorieIngredientService } from 'src/app/services/categorie-ingredient/categorie-ingredient.service';
import {CategorieIngredient} from "../../../models/categorie-ingredient";
import {Allergene} from "../../../models/allergene";
import {AllergeneService} from "../../../services/allergene/allergene.service";


@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent {
  IngredientForm : FormGroup;
  categorieIngredient: CategorieIngredient | undefined;
  categories : CategorieIngredient[] = [];
  allergenes : Allergene[] = [];


  constructor(public service : IngredientService,
              public servicecat : CategorieIngredientService,
              public serviceAllergene : AllergeneService,
              public dialogRef: MatDialogRef<IngredientFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {id:number,type: string}) {
    this.IngredientForm  = new FormGroup({
      $id : new FormControl(null),
      nom : new FormControl('',Validators.required),
      categorie : new FormControl('',Validators.required),
      allergene : new FormControl(''),
      unite : new FormControl('',Validators.required),
      quantite_stock : new FormControl('',Validators.required),
      coutU : new FormControl('',Validators.required)
    });
  }

  ngOnInit(){
    this.categories = this.servicecat.getAllCategorieIngredient();
    this.allergenes = this.serviceAllergene.getAllAllergene();
  }

  onSubmit(){
    const nb : number = this.data.id;
    var id_al : number = 0;
    var id_cat_ingredient : number = 0;
    this.allergenes.forEach(a=>{if(a.getNom()==this.IngredientForm.value.allergene){id_al = a.getId();console.log(a.getId(),id_al)}});
    this.categories.forEach(a=>{if(a.getNom()==this.IngredientForm.value.categorie){id_cat_ingredient = a.getId();console.log(a.getId(),id_cat_ingredient)}});
    console.log(id_al,id_cat_ingredient)
    let tmpIngredient = new Ingredient(
        this.IngredientForm.value.id,
        this.IngredientForm.value.nom,
        id_cat_ingredient,
        this.IngredientForm.value.unite,
        this.IngredientForm.value.quantite_stock,
        this.IngredientForm.value.coutU,
        id_al
        );

    if(this.data.type == "creation"){
      this.service.createIngredient(tmpIngredient);
    }
    else if(this.data.type == "modification"){
      this.service.modifyIngredient(nb,tmpIngredient)
    }
    else{
      console.log("data.type doit être égal à creation ou modification")
    }
    this.dialogRef.close();
  }
  cancel(){
    this.dialogRef.close();
  }
}