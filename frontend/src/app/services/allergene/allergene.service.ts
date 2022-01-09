import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Allergene} from "../../models/allergene";
import {ServicesConfigComponent} from "../services-config";

@Injectable({
  providedIn: 'root'
})
export class AllergeneService {

  constructor(private http : HttpClient) { }

  getAllAllergene(){
    var res : Allergene[] = [];
    let req = this.http.get<any[]>(ServicesConfigComponent.url+"allergene/").subscribe(
        data => {
          data.forEach(e =>{
            res.push(new Allergene(e.id_allergene,e.nom_allergene,e.id_cat_al));
          })},
        error => {console.log("error : "+error)});
    console.log("res : "+res)
    return res
  }

  getAllergene(id : number){
    return this.http.get<Allergene>(ServicesConfigComponent.url+"allergene/"+id);
  }

  createAllergene(allergene : any){
    var req={"nom_allergene":allergene.nom_allergene, "id_cat_al":allergene.id_cat_al}
    console.log(req.id_cat_al);
    return this.http.post<any>(ServicesConfigComponent.url+"allergene/",req).subscribe(
      data => console.log("allergene créé")
    );
  }

  modifyAllergene(id : number,allergene : any){
    var req={"nom_allergene":allergene.nom_allergene, "id_cat_al":allergene.id_cat_al}
    return this.http.put<any>(ServicesConfigComponent.url+"allergene/"+id,req).subscribe(
      data => console.log("allergene modifié")
    );
  }

  deleteAllergene(id : number){
    return this.http.delete<any>(ServicesConfigComponent.url+"allergene/"+id).subscribe(() => console.log("allergene supprimé"));
  }
}
