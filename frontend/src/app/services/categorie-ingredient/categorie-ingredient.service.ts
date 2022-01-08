import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ingredient} from "../../models/ingredient";
import {CategorieIngredient} from "../../models/categorie-ingredient";
import { CatIngr } from 'src/app/models/cat_ingr';

@Injectable({
  providedIn: 'root'
})
export class CategorieIngredientService {

  constructor(private http : HttpClient) { }

  getAllCategorieIngredient(){
    this.http.get<CatIngr>("http://localhost:3000/cat_ingredient/");
  }

  getCategorieIngredient(id : string){
    return this.http.get<CatIngr>("http://localhost:3000/cat_ingredient/"+id);
  }

  createCategorieIngredient(categorieIngredient : CategorieIngredient){
    return this.http.post<CategorieIngredient>("http://localhost:3000/cat_ingredient/",categorieIngredient);
  }

  modifyCategorieIngredient(id : string,categorieIngredient : CategorieIngredient){
    return this.http.put<CategorieIngredient>("http://localhost:3000/cat_ingredient/"+id,categorieIngredient);
  }

  deleteCategorieIngredient(id : string){
    return this.http.delete<CategorieIngredient>("http://localhost:3000/cat_ingredient/"+id);
  }
}
