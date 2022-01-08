import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ingredient} from "../../models/ingredient";
import {CategorieIngredient} from "../../models/categorie-ingredient";

@Injectable({
  providedIn: 'root'
})
export class CategorieIngredientService {

  constructor(private http : HttpClient) { }

  getAllCategorieIngredient(){
    return this.http.get<CategorieIngredient>("http://localhost:3000/cat_ingredient/");
  }

  getCategorieIngredient(id : number){
    return this.http.get<CategorieIngredient>("http://localhost:3000/cat_ingredient/:"+id);
  }

  createCategorieIngredient(categorieIngredient : CategorieIngredient){
    return this.http.post<CategorieIngredient>("http://localhost:3000/cat_ingredient/",categorieIngredient);
  }

  modifyCategorieIngredient(id : number,categorieIngredient : CategorieIngredient){
    return this.http.put<CategorieIngredient>("http://localhost:3000/cat_ingredient/:"+id,categorieIngredient);
  }

  deleteCategorieIngredient(id : number){
    return this.http.delete<CategorieIngredient>("http://localhost:3000/cat_ingredient/:"+id);
  }
}
