import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recette} from "../../models/recette";
import {ServicesConfigComponent} from "../services-config";

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor(private http : HttpClient) {
  }

  getAllRecettes(){
    var res : Recette[] = [];
    let req = this.http.get<any[]>(ServicesConfigComponent.url+"recette/").subscribe(
        data => {
          data.forEach(e =>{
            res.push(new Recette(e.id_recette,e.id_categorie,e.id_utilisateur,e.titre_recette,e.description_recette,e.nb_couvert,e.temps_recette));
          })},
        error => {console.log("error : "+error)});
    console.log("res : "+res)
    return res
  }

  getRecette(id : number){
    return this.http.get<Recette>(ServicesConfigComponent.url+"recette/"+id);
  }

  createRecette(recette : any){
    return this.http.post<any>(ServicesConfigComponent.url+"recette/",recette);
  }

  modifyRecette(id : number,recette : any){
    return this.http.put<any>(ServicesConfigComponent.url+"recette/"+id,recette);
  }

  deleteRecette(id : number){
    return this.http.delete<Recette>(ServicesConfigComponent.url+"recette/"+id);
  }
}
