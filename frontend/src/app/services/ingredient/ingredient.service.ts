import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ingredient} from "../../models/ingredient";
import {ServicesConfigComponent} from "../services-config";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http : HttpClient) {}

  getAllIngredients(){
    //TODO nom_allergene
    var res : Ingredient[] = [];
    let req = this.http.get<any[]>("http://localhost:3000/ingredient/").subscribe(
        data => {
          data.forEach(e =>{
            console.log(e)
            res.push(new Ingredient(e.id_ingredient,e.nom_ingredient,e.id_cat_ingr,e.unite,e.quantite,e.cout_unitaire,e.id_allergene));
          })},
        error => {console.log("error : "+error)});
    console.log("getAllIngredient : "+res)
    return res
  }

  getIngredient(id : number){
    //TODO
    return this.http.get<Ingredient>(ServicesConfigComponent.url+"ingredient/"+id);
  }

  createIngredient(ingredient : Ingredient){
    var tmp = {
      "nom_ingredient":ingredient.getNom(),
      "unite":ingredient.getUnite(),
      "quantite_stock":ingredient.getQuantite(),
      "cout_unitaire":ingredient.getCoutU(),
      "id_cat_ingr":ingredient.getCategorie(),
      "id_allergene":ingredient.getAllergene()
    }
    console.log(tmp);
    this.http.post<any>(ServicesConfigComponent.url+"ingredient/",tmp).subscribe(
        data => console.log("Ingrédient créé")
    );
  }

  modifyIngredient(id : number,ingredient : Ingredient){
    var req = {
      "nom_ingredient":ingredient.getNom(),
      "unite":ingredient.getUnite(),
      "quantite_stock":ingredient.getQuantite(),
      "cout_unitaire":ingredient.getCoutU(),
      "id_cat_ingr":ingredient.getCategorie(),
      "id_allergene":ingredient.getAllergene()
    }
    return this.http.put<any>(ServicesConfigComponent.url+"ingredient/"+id,req).subscribe(
        data => console.log("Ingrédient modifié")
    );  }

  deleteIngredient(id : number){
    return this.http.delete(ServicesConfigComponent.url+"ingredient/"+id).subscribe(() => console.log("Ingrédient supprimé"));;
  }

}
