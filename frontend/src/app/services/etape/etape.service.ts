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
    return this.http.post<Etape>(ServicesConfigComponent.url+"etape/",etape);
  }

  modifyEtape(id : number,etape : Etape){
    return this.http.put<Etape>(ServicesConfigComponent.url+"etape/"+id,etape);
  }

  deleteEtape(id : number){
    return this.http.delete<Etape>(ServicesConfigComponent.url+"etape/"+id);
  }
}
