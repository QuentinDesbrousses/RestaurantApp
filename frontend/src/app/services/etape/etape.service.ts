import { Injectable } from '@angular/core';
import {Etape} from "../../models/etape";
import {HttpClient} from "@angular/common/http";
import {ServicesConfigComponent} from "../services-config";

@Injectable({
  providedIn: 'root'
})
export class EtapeService {

  constructor(private http : HttpClient) { }

  getAllEtape(){
    return this.http.get<Etape>(ServicesConfigComponent.url+"etape/");
  }

  getEtape(id : number){
    return this.http.get<Etape>(ServicesConfigComponent.url+"etape/"+id);
  }

  createEtape(etape : Etape){
    var tmp = {
      titre_etape:etape.getTitre(),
      description_etape:etape.getDescritpion(),
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
