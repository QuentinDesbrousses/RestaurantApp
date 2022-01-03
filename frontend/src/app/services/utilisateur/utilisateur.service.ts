import { Injectable } from '@angular/core';
import {Ingredient} from "../../models/ingredient";
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../../models/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http : HttpClient) { }

  getAllUtilisateur(){
    return this.http.get<Utilisateur>("http://localhost:3000/utilisateur/");
  }

  getUtilisateur(id : string){
    return this.http.get<Utilisateur>("http://localhost:3000/utilisateur/:"+id);
  }

  createIngredient(utilisateur : Utilisateur){
    return this.http.post<Utilisateur>("http://localhost:3000/utilisateur/",utilisateur);
  }

  modifyIngredient(id : string,utilisateur : Utilisateur){
    return this.http.put<Utilisateur>("http://localhost:3000/utilisateur/:"+id,utilisateur);
  }

  deleteIngredient(id : string){
    return this.http.delete<Utilisateur>("http://localhost:3000/utilisateur/:"+id);
  }
}
