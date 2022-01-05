import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ingredient} from "../../models/ingredient";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http : HttpClient) {}

  getAllIngredients(){
    return this.http.get<Ingredient>("http://localhost:3000/ingredient/");
  }

  getIngredient(id : string){
    return this.http.get<Ingredient>("http://localhost:3000/ingredient/:"+id);
  }

  createIngredient(ingredient : Ingredient){
    return this.http.post<Ingredient>("http://localhost:3000/ingredient/",ingredient);
  }

  modifyIngredient(id : string,ingredient : Ingredient){
    return this.http.put<Ingredient>("http://localhost:3000/ingredient/:"+id,ingredient);
  }

  deleteIngredient(id : string){
    return this.http.delete<Ingredient>("http://localhost:3000/ingredient/:"+id);
  }

}
