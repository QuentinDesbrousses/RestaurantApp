import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategorieAllergene} from "../../models/categorie-allergene";
import {ServicesConfigComponent} from "../services-config";



@Injectable({
  providedIn: 'root'
})
export class CategorieAllergeneService {

  constructor(private http : HttpClient) { }

  getAllCategorieAllergene(){
    var res : CategorieAllergene[] = [];
    let req = this.http.get<any[]>(ServicesConfigComponent.url+"cat_allergene/").subscribe(
        data => {
          data.forEach(e =>{
            res.push(new CategorieAllergene(e.id_cat_al,e.nom_cat_al));
          })},
        error => {console.log("error : "+error)});
    console.log("res : "+res)
    return res
  }

  getCategorieAllergene(id : number){
    var res : CategorieAllergene | undefined;
    let req = this.http.get<any>(ServicesConfigComponent.url+"cat_allergene/").subscribe(
        data => { res = data},
        error => {console.log("error : "+error)});
    console.log("res : "+res)
    return res;
  }

  createCategorieAllergene( categorie_allergene:any): void{
    var tmp = {"nom_cat_al":categorie_allergene.getNom()}
    this.http.post<any>(ServicesConfigComponent.url+"cat_allergene/",tmp).subscribe(
      data => console.log("Catégorie Allergene créée")
    );
  }

  modifyCategorieAllergene(id : number,categorie_allergene: any){
    var req = {"nom_cat_al":categorie_allergene.nom_cat_al}
    return this.http.put<any>(ServicesConfigComponent.url+"cat_allergene/"+id,req).subscribe(
      data => console.log("Catégorie allergene modifiée")
    );
  }

  deleteCategorieAllergene(id : number){
    return this.http.delete(ServicesConfigComponent.url+"cat_allergene/"+id).subscribe(() => console.log("cat-allergene supprimée"));
  }
}
