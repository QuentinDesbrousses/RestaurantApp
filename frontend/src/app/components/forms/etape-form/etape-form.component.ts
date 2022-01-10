import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EtapeService} from "../../../services/etape/etape.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {Etape} from "../../../models/etape";
import {Ingredient} from "../../../models/ingredient";
import {IngredientService} from "../../../services/ingredient/ingredient.service";

@Component({
  selector: 'app-etape-form',
  templateUrl: './etape-form.component.html',
  styleUrls: ['./etape-form.component.css']
})
export class EtapeFormComponent {
  EtapeForm : FormGroup;
  IngredientForm : FormGroup;
  IngredientSelectedForm : FormGroup;
  ingredientSelected : [{nom_ingredient:string,quantite:number}] = [{nom_ingredient:"Aucun",quantite:0}];
  ingredients : Ingredient[] = [];

  constructor(private service : EtapeService, private serviceIngr : IngredientService, public dialogRef: MatDialogRef<EtapeFormComponent>, @Inject(MAT_DIALOG_DATA) public data: {type: string, id:number }) {
    this.ingredients.pop();
    this.ingredients = this.serviceIngr.getAllIngredients();
    this.EtapeForm = new FormGroup({
      $id : new FormControl("null"),
      titre : new FormControl('',Validators.required),
      description : new FormControl('Sans description'),
      ingredients : new FormControl(''),
      temps : new FormControl('',Validators.required)
    });
    this.IngredientForm = new FormGroup({
      selectIngredient : new FormControl("",Validators.required),
      quantite : new FormControl(0,Validators.required)
    });
    this.IngredientSelectedForm = new FormGroup({
      unselectIngredient : new FormControl("")
    });
  }

  // Drag & Drop etapes
  drop(event: CdkDragDrop<[{nom_ingredient:string,quantite:number}]>) {
    moveItemInArray(this.ingredientSelected, event.previousIndex, event.currentIndex);
  }

  selectIngredient(){
    if(this.ingredientSelected[0] !=  {nom_ingredient:"Aucun",quantite:0}){
      this.ingredientSelected.push({nom_ingredient:this.IngredientForm.value.selectIngredient,quantite:this.IngredientForm.value.quantite});
    }
    else {
      this.unselectIngredient();
      this.ingredientSelected = [{nom_ingredient:this.IngredientForm.value.selectIngredient,quantite:this.IngredientForm.value.quantite}]
    }
  }

  unselectIngredient(){
    this.ingredientSelected.pop()
  }

  onSubmit(){
    const nb : number = this.data.id;
    var ingr : [{id_ingredient: number,quantite:number}] = [{id_ingredient:0,quantite:0}]
    console.log(this.EtapeForm.value.ingredients)
    this.ingredientSelected.forEach(i=> {
      console.log(i);
      this.ingredients.forEach(e=>{
        console.log(i.nom_ingredient.split(' ')[0]);
        console.log(i.nom_ingredient.split(' ')[0] == e.getNom())
        if(i.nom_ingredient.split(' ')[0] == e.getNom()){
          ingr.push({id_ingredient:e.getId(),quantite:i.quantite});
        }
      }
      )
    })
    let tmpEtape = new Etape(this.EtapeForm.value.id,
        this.EtapeForm.value.titre,
        this.EtapeForm.value.description,
        this.EtapeForm.value.temps,
        ingr
    );
    if(this.data.type=="creation"){
      this.service.createEtape(tmpEtape);
      console.log("Ingredient créé : "+tmpEtape)
    }
    else if(this.data.type == "modification"){
      this.service.modifyEtape(nb,tmpEtape)
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
