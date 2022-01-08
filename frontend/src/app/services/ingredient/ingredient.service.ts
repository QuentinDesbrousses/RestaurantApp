import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ingredient} from "../../models/ingredient";
import {CategorieAllergene} from "../../models/categorie-allergene";
import {CategorieIngredient} from "../../models/categorie-ingredient";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http : HttpClient) {}

  getAllIngredients(){
    var res : Ingredient[] = [];
    let req = this.http.get<any[]>("http://localhost:3000/cat_ingredient/").subscribe(
        data => {
          data.forEach(e =>{
            res.push(new Ingredient(e.id_ingredient,e.nom_ingredient,e.id_cat_ingr,e.unite,e.quantite,e.coutU,e.id_allergene));
          })},
        error => {console.log("error : "+error)});
    console.log("res : "+res)
    return res  }

  getIngredient(id : number){
    return this.http.get<Ingredient>("http://localhost:3000/ingredient/"+id);
  }

  createIngredient(ingredient : Ingredient){
    return this.http.post<Ingredient>("http://localhost:3000/ingredient/",ingredient);
  }

  modifyIngredient(id : number,ingredient : Ingredient){
    return this.http.put<Ingredient>("http://localhost:3000/ingredient/"+id,ingredient);
  }

  deleteIngredient(id : number){
    return this.http.delete<Ingredient>("http://localhost:3000/ingredient/"+id);
  }

}
