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

  getUtilisateur(id : number){
    return this.http.get<Utilisateur>("http://localhost:3000/utilisateur/:"+id);
  }

  createUtilisateur(utilisateur : Utilisateur){
    return this.http.post<Utilisateur>("http://localhost:3000/utilisateur/",utilisateur);
  }

  modifyUtilisateur(id : number,utilisateur : Utilisateur){
    return this.http.put<Utilisateur>("http://localhost:3000/utilisateur/:"+id,utilisateur);
  }

  deleteUtilisateur(id : number){
    return this.http.delete<Utilisateur>("http://localhost:3000/utilisateur/:"+id);
  }
}
