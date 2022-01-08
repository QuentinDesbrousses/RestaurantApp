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

  createCategorieAllergene(categorie_allergene : CategorieAllergene): void{
    var tmp = {"id_cat_al":categorie_allergene.getId(),"nom_cat_al":categorie_allergene.getNom()}
    console.log("service");
    this.http.post<any>(ServicesConfigComponent.url+"cat_allergene/",tmp);
  }

  modifyCategorieAllergene(id : number,categorie_allergene : CategorieAllergene){
    var req = {"id_cat_al":categorie_allergene.getId(),"nom_cat_al":categorie_allergene.getNom()}
    console.log("service");
    return this.http.put<CategorieAllergene>(ServicesConfigComponent.url+"cat_allergene/"+id,req);
  }

  deleteCategorieAllergene(id : number){
    return this.http.delete(ServicesConfigComponent.url+"cat_allergene/"+id);
  }
}
