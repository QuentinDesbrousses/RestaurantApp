import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategorieRecette} from "../../models/categorie-recette";
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
    var cat : CategorieRecette = new CategorieRecette(0,"");
    var req = this.http.get<any>(ServicesConfigComponent.url+"categorie/"+id).subscribe(
        data => {cat = new CategorieRecette(data.id_categorie,data.nom_categorie)}
    );
    return cat;
  }

  createCategorieRecette(categorieRecette : any){
    var req = {"nom_categorie":categorieRecette.nom_categorie}
    return this.http.post<any>(ServicesConfigComponent.url+"categorie/",req).subscribe(
      data => console.log("Catégorie créée")
    );
  }

  modifyCategorieRecette(id : number,categorieRecette : any){
    var tmp = {"nom_categorie":categorieRecette.getNom()}
    return this.http.put<any>(ServicesConfigComponent.url+"categorie/"+id,tmp).subscribe(
      data => console.log("Catégorie ingredient modifiée")
    );
  }

  deleteCategorieRecette(id : number){
    return this.http.delete(ServicesConfigComponent.url+"categorie/"+id).subscribe(() => console.log("categorie supprimée"));
  }
}
