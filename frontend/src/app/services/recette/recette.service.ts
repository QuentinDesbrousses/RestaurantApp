import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recette} from "../../models/recette";

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor(private http : HttpClient) {
  }

  getAllRecettes(){
    return this.http.get<Recette>("http://localhost:3000/recette/");
  }

  getRecette(id : number){
    return this.http.get<Recette>("http://localhost:3000/recette/"+id);
  }

  createRecette(recette : Recette){
    return this.http.post<Recette>("http://localhost:3000/recette/",recette);
  }

  modifyRecette(id : number,recette : Recette){
    return this.http.put<Recette>("http://localhost:3000/recette/"+id,recette);
  }

  deleteRecette(id : number){
    return this.http.delete<Recette>("http://localhost:3000/recette/"+id);
  }
}
