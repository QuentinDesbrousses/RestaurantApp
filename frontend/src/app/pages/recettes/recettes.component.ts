import { Component } from '@angular/core';
import {Recette} from "../../models/recette";
import {Etape} from "../../models/etape";
import {Ingredient} from "../../models/ingredient";
import {CategorieAllergene} from "../../models/categorie-allergene";
import {CategorieRecette} from "../../models/categorie-recette";
import {CategorieIngredient} from "../../models/categorie-ingredient";

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent {
    recetteTab : Recette[] = [
        new Recette({id:"1",titre:'Crêpes',description:'Crêpes bretonnes',etapes:[new Etape({id:"1",titre:"Lait",description:"Ajouter le lait",ingredients:[{ingredient:new Ingredient({id:"1",nom:"lait",categorie:new CategorieIngredient({id:"5",nom:"Produit laitier"}),allergene:"Lactose",unite:"kg",quantite:0.5,coutU:0.8}),quantite:2}],temps:5,cout:0.8})],categorie:new CategorieRecette({id:"1",nom:"Dessert"}),nbCouvert:8,temps:15}),
        new Recette({id:"2",titre:'Gaufres',description:'Gaufres de Cyril',etapes:[new Etape({id:"2",titre:"Lait",description:"Ajouter le lait",ingredients:[{ingredient:new Ingredient({id:"2",nom:"lait",categorie:new CategorieIngredient({id:"5",nom:"Produit laitier"}),allergene:"Lactose",unite:"kg",quantite:0.5,coutU:0.8}),quantite:5}],temps:5,cout:0.8})],categorie:new CategorieRecette({id:"1",nom:"Dessert"}),nbCouvert:8,temps:15})
    ];
    categoriesTab : CategorieRecette[] = [
        new CategorieRecette({id:"1",nom:"Entrée"}),
        new CategorieRecette({id:"2",nom:"Plat"}),
        new CategorieRecette({id:"1",nom:"Dessert"})
    ];
    etapesTab : Etape[] = [
        new Etape({id:"1",titre:"Sucrer",description:"Ajouter le sucre",ingredients:[{ingredient:new Ingredient({id:"1",nom:"sucre",categorie: new CategorieIngredient({id:"1",nom:"Aide culinaire"}),allergene:"Aucun",unite:"kg",quantite:5,coutU:2}),quantite : 0.5}],temps:1,cout:0.2})
    ];
}
