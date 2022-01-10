import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../../models/utilisateur";
import {ServicesConfigComponent} from "../services-config"

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http : HttpClient) { }

  getAllUtilisateur(){
    var res : Utilisateur[] = [];
    let req = this.http.get<any[]>(ServicesConfigComponent.url+"utilisateur/").subscribe(
        data => {
          data.forEach(e =>{
            res.push(new Utilisateur(e.id_utilisateur,e.nom,e.prenom,e.description,e.email,e.mdp));
          })},
        error => {console.log("error : "+error)});
    console.log("res : "+res)
    return res  }

  getUtilisateur(id : number){
    return this.http.get<Utilisateur>(ServicesConfigComponent.url+"utilisateur/"+id);
  }

  createUtilisateur(utilisateur : Utilisateur){
    return this.http.post<Utilisateur>(ServicesConfigComponent.url+"utilisateur/",utilisateur).subscribe(
      data => console.log("utilisateur créé")
  );
  }

  modifyUtilisateur(id : number,utilisateur : Utilisateur){
    return this.http.put<Utilisateur>(ServicesConfigComponent.url+"utilisateur/"+id,utilisateur).subscribe(
      data => console.log("utilisateur modifié")
  );
  }

  deleteUtilisateur(id : number){
    return this.http.delete<Utilisateur>(ServicesConfigComponent.url+"utilisateur/"+id).subscribe(
      data => console.log("utilisateur supprimé")
  );
  }
}
