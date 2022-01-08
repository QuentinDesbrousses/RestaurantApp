import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategorieRecette} from "../../models/categorie-recette";
import {CategorieAllergene} from "../../models/categorie-allergene";
import {ServicesConfigComponent} from "../services-config";

@Injectable({
  providedIn: 'root'
})
export class CategorieRecetteService {

  constructor(private http : HttpClient) { }

  getAllCategorieRecette(){
    var res : CategorieRecette[] = [];
    let req = this.http.get<any[]>(ServicesConfigComponent.url+"categorie/").subscribe(
        data => {
          data.forEach(e =>{
            res.push(new CategorieRecette(e.id_categorie,e.nom_categorie));
          })},
        error => {console.log("error : "+error)});
    console.log("res : "+res)
    return res
  }

  getCategorieRecette(id : number){
    return this.http.get<CategorieRecette>(ServicesConfigComponent.url+"categorie/"+id);
  }

  createCategorieRecette(categorieRecette : CategorieRecette){
    return this.http.post<CategorieRecette>(ServicesConfigComponent.url+"categorie/",categorieRecette);
  }

  modifyCategorieRecette(id : number,categorieRecette : CategorieRecette){
    return this.http.put<CategorieRecette>(ServicesConfigComponent.url+"categorie/"+id,categorieRecette);
  }

  deleteCategorieRecette(id : number){
    return this.http.delete<CategorieRecette>(ServicesConfigComponent.url+"categorie/"+id);
  }
}
