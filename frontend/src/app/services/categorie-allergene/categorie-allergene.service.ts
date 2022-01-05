import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategorieAllergene} from "../../models/categorie-allergene";

@Injectable({
  providedIn: 'root'
})
export class CategorieAllergeneService {

  constructor(private http : HttpClient) { }

  getAllCategorieAllergene(){
    return this.http.get<CategorieAllergene>("http://localhost:3000/categorie_allergene/");
  }

  getCategorieAllergene(id : string){
    return this.http.get<CategorieAllergene>("http://localhost:3000/categorie_allergene/:"+id);
  }

  createCategorieAllergene(categorie_allergene : CategorieAllergene){
    return this.http.post<CategorieAllergene>("http://localhost:3000/categorie_allergene/",categorie_allergene);
  }

  modifyCategorieAllergene(id : string,categorie_allergene : CategorieAllergene){
    return this.http.put<CategorieAllergene>("http://localhost:3000/categorie_allergene/:"+id,categorie_allergene);
  }

  deleteCategorieAllergene(id : string){
    return this.http.delete<CategorieAllergene>("http://localhost:3000/categorie_allergene/:"+id);
  }
}
