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

  getCategorieRecette(id : number){
    return this.http.get<CategorieRecette>("http://localhost:3000/categorie/"+id);
  }

  createCategorieRecette(categorieRecette : CategorieRecette){
    return this.http.post<CategorieRecette>("http://localhost:3000/categorie/",categorieRecette);
  }

  modifyCategorieRecette(id : number,categorieRecette : CategorieRecette){
    return this.http.put<CategorieRecette>("http://localhost:3000/categorie/"+id,categorieRecette);
  }

  deleteCategorieRecette(id : number){
    return this.http.delete<CategorieRecette>("http://localhost:3000/categorie/"+id);
  }
}
