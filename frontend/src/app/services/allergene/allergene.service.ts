import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Allergene} from "../../models/allergene";
import {JsonArray} from "@angular/compiler-cli/ngcc/src/packages/entry_point";

@Injectable({
  providedIn: 'root'
})
export class AllergeneService {

  constructor(private http : HttpClient) { }

  getAllAllergene(){
    return this.http.get<Allergene>("http://localhost:3000/allergene/");
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
