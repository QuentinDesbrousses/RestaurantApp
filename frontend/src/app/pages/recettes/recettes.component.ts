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
    ingredientTab : string[] = [
        new Ingredient({id:"1",nom:"Maïs",categorie:new CategorieIngredient({id:"1",nom:"Céréale"}),allergene:"Aucun",unite:"kg",quantite:3,coutU:1.5}).getNom(),
        new Ingredient({id:"2",nom:"Salade",categorie:new CategorieIngredient({id:"2",nom:"Légume"}),allergene:"Aucun",unite:"pièce",quantite:3,coutU:1.3}).getNom(),
        new Ingredient({id:"3",nom:"Farine",categorie:new CategorieIngredient({id:"1",nom:"Céréale"}),allergene:"Gluten",unite:"kg",quantite:20,coutU:0.7}).getNom(),
        new Ingredient({id:"4",nom:"Pomme",categorie:new CategorieIngredient({id:"3",nom:"Fruit"}),allergene:"Aucun",unite:"kg",quantite:15,coutU:3}).getNom(),
        new Ingredient({id:"5",nom:"Carotte",categorie:new CategorieIngredient({id:"4",nom:"Légume"}),allergene:"Aucun",unite:"kg",quantite:10,coutU:1.2}).getNom(),
        new Ingredient({id:"6",nom:"Lait",categorie:new CategorieIngredient({id:"5",nom:"Produit laitier"}),allergene:"Lactose",unite:"L",quantite:12,coutU:0.6}).getNom(),
        new Ingredient({id:"7",nom:"Poulet",categorie:new CategorieIngredient({id:"6",nom:"Viande"}),allergene:"Aucun",unite:"kg",quantite:13,coutU:9}).getNom(),
        new Ingredient({id:"8",nom:"Saucisse",categorie:new CategorieIngredient({id:"6",nom:"Viande"}),allergene:"Aucun",unite:"kg",quantite:10,coutU:5}).getNom(),
        new Ingredient({id:"9",nom:"Saumon",categorie:new CategorieIngredient({id:"7",nom:"Poisson"}),allergene:"Aucun",unite:"kg",quantite:3,coutU:25}).getNom(),
        new Ingredient({id:"10",nom:"Beurre",categorie:new CategorieIngredient({id:"5",nom:"Produit laitier"}),allergene:"Lactose",unite:"kg",quantite:8,coutU:5.2}).getNom(),
        new Ingredient({id:"11",nom:"Sucre",categorie:new CategorieIngredient({id:"8",nom:"Aide culinaire"}),allergene:"Aucun",unite:"kg",quantite:11,coutU:0.8}).getNom()
    ];
}
