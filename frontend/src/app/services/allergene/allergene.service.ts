import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Allergene} from "../../models/allergene";

@Injectable({
  providedIn: 'root'
})
export class AllergeneService {

  constructor(private http : HttpClient) { }

  getAllAllergene(){
    var res : Allergene[] = [];
    let req = this.http.get<any[]>("http://localhost:3000/allergene/").subscribe(
        data => {
          data.forEach(e =>{
            res.push(new Allergene(e.id_allergene,e.nom_allergene,e.id_cat_al));
          })},
        error => {console.log("error : "+error)});
    console.log("res : "+res)
    return res
  }

  getAllergene(id : number){
    return this.http.get<Allergene>("http://localhost:3000/allergene/:"+id);
  }

  createAllergene(allergene : Allergene){
    return this.http.post<Allergene>("http://localhost:3000/allergene/",allergene);
  }

  modifyAllergene(id : number,allergene : Allergene){
    return this.http.put<Allergene>("http://localhost:3000/allergene/:"+id,allergene);
  }

  deleteAllergene(id : number){
    return this.http.delete<Allergene>("http://localhost:3000/allergene/:"+id);
  }
}
