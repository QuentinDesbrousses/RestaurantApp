import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategorieRecette} from "../../models/categorie-recette";

@Injectable({
  providedIn: 'root'
})
export class CategorieRecetteService {

  constructor(private http : HttpClient) { }

  getAllCategorieRecette(){
    return this.http.get<CategorieRecette>("http://localhost:3000/categorie/");
  }

  getCategorieRecette(id : string){
    return this.http.get<CategorieRecette>("http://localhost:3000/categorie/:"+id);
  }

  createCategorieRecette(categorieRecette : CategorieRecette){
    return this.http.post<CategorieRecette>("http://localhost:3000/categorie/",categorieRecette);
  }

  modifyCategorieRecette(id : string,categorieRecette : CategorieRecette){
    return this.http.put<CategorieRecette>("http://localhost:3000/categorie/:"+id,categorieRecette);
  }

  deleteCategorieRecette(id : string){
    return this.http.delete<CategorieRecette>("http://localhost:3000/categorie/:"+id);
  }
}
