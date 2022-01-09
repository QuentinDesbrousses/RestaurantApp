import { Injectable } from '@angular/core';
import {Etape} from "../../models/etape";
import {HttpClient} from "@angular/common/http";
import {ServicesConfigComponent} from "../services-config";
import {Ingredient} from "../../models/ingredient";

@Injectable({
  providedIn: 'root'
})
export class EtapeService {

  constructor(private http : HttpClient) { }

  getAllEtape(){
    var res : Etape[] = [];
    let req = this.http.get<any[]>("http://localhost:3000/etape/").subscribe(
        data => {
          data.forEach(e =>{
            console.log(e)
            res.push(new Etape(e.id_etape,e.titre_etape,e.description_etape,e.temps_etape,e.ingredients));
          })},
        error => {console.log("error : "+error)});
    console.log("getAllIngredient : "+res)
    return res
  }
v
  getEtape(id : number){
    return this.http.get<Etape>(ServicesConfigComponent.url+"etape/"+id);
  }

  createEtape(etape : Etape){
    var tmp = {
      titre_etape:etape.getTitre(),
      description_etape:etape.getDescription(),
      temps_etape:etape.getTemps(),
      ingredients:etape.getIngredients(),
    }
    console.log(tmp);
    this.http.post<any>(ServicesConfigComponent.url+"etape/",tmp).subscribe(
        data => console.log("Etape créée")
    );
  }

  modifyEtape(id : number,etape : Etape){
    return this.http.put<Etape>(ServicesConfigComponent.url+"etape/"+id,etape);
  }

  deleteEtape(id : number){
    return this.http.delete<Etape>(ServicesConfigComponent.url+"etape/"+id);
  }
}
