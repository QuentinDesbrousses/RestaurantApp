import {Injectable, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Ingredient} from "../models/ingredient";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  @Input() ingredient : Ingredient | undefined;

  constructor(private http : HttpClient) {}

  getAllIngredients(){
    return this.http.get<Ingredient>("http://localhost:5432/ingredient/");
  }

  getIngredient(id : string){
    return this.http.get<Ingredient>("http://localhost:5432/ingredient/:"+id);
  }

  createIngredient(ingr : Ingredient){
    return this.http.post<Ingredient>("http://localhost:5432/ingredient/",ingr);
  }

  modifyIngredient(id : number){
    return this.http.put<Ingredient>("http://localhost:5432/ingredient/:",id);
  }

  deleteIngredient(id : number){
    return this.http.delete<Ingredient>("http://localhost:5432/ingredient/:"+id);
  }

}
