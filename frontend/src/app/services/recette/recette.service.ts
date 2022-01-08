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
    return this.http.get<Recette>(ServicesConfigComponent.url+"recette/");
  }

  getRecette(id : number){
    return this.http.get<Recette>(ServicesConfigComponent.url+"recette/"+id);
  }

  createRecette(recette : Recette){
    return this.http.post<Recette>(ServicesConfigComponent.url+"recette/",recette);
  }

  modifyRecette(id : number,recette : Recette){
    return this.http.put<Recette>(ServicesConfigComponent.url+"recette/"+id,recette);
  }

  deleteRecette(id : number){
    return this.http.delete<Recette>(ServicesConfigComponent.url+"recette/"+id);
  }
}
