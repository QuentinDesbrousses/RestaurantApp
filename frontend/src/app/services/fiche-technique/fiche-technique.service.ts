import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FicheTechnique} from "../../models/fiche-technique";
import {ServicesConfigComponent} from "../services-config";

@Injectable({
  providedIn: 'root'
})
export class FicheTechniqueService {

  constructor(private http : HttpClient) { }

  getAllFiche(){
    return this.http.get<FicheTechnique>(ServicesConfigComponent.url+"fiche/");
  }

  getFiche(id : number){
    return this.http.get<FicheTechnique>(ServicesConfigComponent.url+"fiche/"+id);
  }

  createFiche(fiche : FicheTechnique){
    return this.http.post<FicheTechnique>(ServicesConfigComponent.url+"fiche/",fiche).subscribe(
      data => console.log("fiche créée")
  );
  }

  modifyFiche(id : number,fiche : FicheTechnique){
    return this.http.put<FicheTechnique>(ServicesConfigComponent.url+"fiche/"+id,fiche).subscribe(
      data => console.log("fiche modifiée")
  );
  }

  deleteFiche(id : number){
    return this.http.delete<FicheTechnique>(ServicesConfigComponent.url+"fiche/"+id).subscribe(
      data => console.log("fiche supprimée")
  );
  }

}
