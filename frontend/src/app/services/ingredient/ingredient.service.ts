import {Injectable, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ingredient} from "../../models/ingredient";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  @Input() ingredient : Ingredient | undefined;

  constructor(private http : HttpClient) {}

  getAllIngredients(){
    console.log(this.http.get<Ingredient>("http://localhost:3000/ingredient/").subscribe());
    return this.http.get<Ingredient>("http://localhost:3000/ingredient/").subscribe();
  }

  getIngredient(id : string){
    return this.http.get<Ingredient>("http://localhost:3000/ingredient/:"+id);
  }

  createIngredient(ingr : Ingredient){
    return this.http.post<Ingredient>("http://localhost:3000/ingredient/",ingr);
  }

  modifyIngredient(id : string,ingr : Ingredient){
    return this.http.put<Ingredient>("http://localhost:3000/ingredient/:"+id,ingr);
  }

  deleteIngredient(id : string){
    return this.http.delete<Ingredient>("http://localhost:3000/ingredient/:"+id);
  }

}
