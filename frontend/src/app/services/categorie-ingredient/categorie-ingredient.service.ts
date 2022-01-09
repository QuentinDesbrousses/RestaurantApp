import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategorieIngredient} from "../../models/categorie-ingredient";
import {ServicesConfigComponent} from "../services-config";

@Injectable({
  providedIn: 'root'
})

export class CategorieIngredientService {

    constructor(private http : HttpClient) { }

    getAllCategorieIngredient(){
        var res : CategorieIngredient[] = [];
        let req = this.http.get<any[]>(ServicesConfigComponent.url+"cat_ingredient/").subscribe(
            data => {
              data.forEach(e =>{
                res.push(new CategorieIngredient(e.id_cat_ingr,e.nom_cat_ingr));
              })},
            error => {console.log("error : "+error)});
        console.log("res : "+res)
    return res
  }

  getCategorieIngredient(id : number){
        var res : CategorieIngredient | undefined;
      let req = this.http.get<any>(ServicesConfigComponent.url+"cat_ingredient/"+id).subscribe(
          (data) => res = new CategorieIngredient(data.id_cat_ingr,data.nom_cat_ingr));
    return res;
  }

  createCategorieIngredient(categorieIngredient : any){
    var tmp = {"nom_cat_ingr":categorieIngredient.getNom()}
    return this.http.post<any>(ServicesConfigComponent.url+"cat_ingredient/",tmp).subscribe(
      data => console.log("Catégorie créée")
    );
  }

  modifyCategorieIngredient(id : number,categorieIngredient : any){
    var tmp = {"nom_cat_ingr":categorieIngredient.getNom()}
    return this.http.put<any>(ServicesConfigComponent.url+"cat_ingredient/"+id,tmp).subscribe(
      data => console.log("Catégorie ingredient modifiée")
    );
  }

  deleteCategorieIngredient(id : number){
    this.http.delete(ServicesConfigComponent.url+"cat_ingredient/"+id).subscribe(() => console.log("cat-ingredient supprimé"));
  }
}
