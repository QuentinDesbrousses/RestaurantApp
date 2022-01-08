import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ingredient} from "../../models/ingredient";
import {ServicesConfigComponent} from "../services-config";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http : HttpClient) {}

  getAllIngredients(){
    //TODO nom_allergene
    var res : Ingredient[] = [];
    let req = this.http.get<any[]>("http://localhost:3000/ingredient/").subscribe(
        data => {
          data.forEach(e =>{
            console.log(e)
            res.push(new Ingredient(e.id_ingredient,e.nom_ingredient,e.id_cat_ingr,e.unite,e.quantite,e.cout_unitaire,0));
          })},
        error => {console.log("error : "+error)});
    console.log("getAllIngredient : "+res)
    return res  }

  getIngredient(id : number){
    return this.http.get<Ingredient>(ServicesConfigComponent.url+"ingredient/"+id);
  }

  createIngredient(ingredient : Ingredient){
    return this.http.post<Ingredient>(ServicesConfigComponent.url+"ingredient/",ingredient);
  }

  modifyIngredient(id : number,ingredient : Ingredient){
    return this.http.put<Ingredient>(ServicesConfigComponent.url+"ingredient/"+id,ingredient);
  }

  deleteIngredient(id : number){
    return this.http.delete<Ingredient>(ServicesConfigComponent.url+"ingredient/"+id);
  }

}
