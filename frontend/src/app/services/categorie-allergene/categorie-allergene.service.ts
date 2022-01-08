import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategorieAllergene} from "../../models/categorie-allergene";

@Injectable({
  providedIn: 'root'
})
export class CategorieAllergeneService {

  constructor(private http : HttpClient) { }

  getAllCategorieAllergene(){
    return this.http.get<CategorieAllergene>("http://localhost:3000/cat_allergene/");
  }

  getCategorieAllergene(id : number){
    return this.http.get<CategorieAllergene>("http://localhost:3000/cat_allergene/:"+id);
  }

  createCategorieAllergene(categorie_allergene : CategorieAllergene){
    return this.http.post<CategorieAllergene>("http://localhost:3000/cat_allergene/",categorie_allergene);
  }

  modifyCategorieAllergene(id : number,categorie_allergene : CategorieAllergene){
    return this.http.put<CategorieAllergene>("http://localhost:3000/cat_allergene/:"+id,categorie_allergene);
  }

  deleteCategorieAllergene(id : number){
    return this.http.delete<CategorieAllergene>("http://localhost:3000/cat_allergene/:"+id);
  }
}
