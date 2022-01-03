import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FicheTechnique} from "../../models/fiche-technique";

@Injectable({
  providedIn: 'root'
})
export class FicheTechniqueService {

  constructor(private http : HttpClient) { }

  getAllFiche(){
    return this.http.get<FicheTechnique>("http://localhost:3000/fiche/");
  }

  getFiche(id : string){
    return this.http.get<FicheTechnique>("http://localhost:3000/fiche/:"+id);
  }

  createFiche(fiche : FicheTechnique){
    return this.http.post<FicheTechnique>("http://localhost:3000/fiche/",fiche);
  }

  modifyFiche(id : string,fiche : FicheTechnique){
    return this.http.put<FicheTechnique>("http://localhost:3000/fiche/:"+id,fiche);
  }

  deleteFiche(id : string){
    return this.http.delete<FicheTechnique>("http://localhost:3000/fiche/:"+id);
  }
}
