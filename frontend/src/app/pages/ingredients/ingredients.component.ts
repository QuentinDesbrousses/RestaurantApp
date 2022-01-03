import { Component} from '@angular/core';
import {Ingredient} from "../../models/ingredient";
import {CategorieAllergene} from "../../models/categorie-allergene";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  ingredientTab : Ingredient[] = [
      new Ingredient({id:"1",nom:"Maïs",categorie:new CategorieAllergene({id:"1",nom:"Céréale"}),allergene:"Aucun",unite:"kg",quantite:3,coutU:1.5}),
      new Ingredient({id:"2",nom:"Salade",categorie:new CategorieAllergene({id:"2",nom:"Légume"}),allergene:"Aucun",unite:"pièce",quantite:3,coutU:1.3}),
      new Ingredient({id:"3",nom:"Farine",categorie:new CategorieAllergene({id:"1",nom:"Céréale"}),allergene:"Gluten",unite:"kg",quantite:20,coutU:0.7}),
      new Ingredient({id:"4",nom:"Pomme",categorie:new CategorieAllergene({id:"3",nom:"Fruit"}),allergene:"Aucun",unite:"kg",quantite:15,coutU:3}),
      new Ingredient({id:"5",nom:"Carotte",categorie:new CategorieAllergene({id:"4",nom:"Légume"}),allergene:"Aucun",unite:"kg",quantite:10,coutU:1.2}),
      new Ingredient({id:"6",nom:"Lait",categorie:new CategorieAllergene({id:"5",nom:"Produit laitier"}),allergene:"Lactose",unite:"L",quantite:12,coutU:0.6}),
      new Ingredient({id:"7",nom:"Poulet",categorie:new CategorieAllergene({id:"6",nom:"Viande"}),allergene:"Aucun",unite:"kg",quantite:13,coutU:9}),
      new Ingredient({id:"8",nom:"Saucisse",categorie:new CategorieAllergene({id:"6",nom:"Viande"}),allergene:"Aucun",unite:"kg",quantite:10,coutU:5}),
      new Ingredient({id:"9",nom:"Saumon",categorie:new CategorieAllergene({id:"7",nom:"Poisson"}),allergene:"Aucun",unite:"kg",quantite:3,coutU:25}),
      new Ingredient({id:"10",nom:"Beurre",categorie:new CategorieAllergene({id:"5",nom:"Produit laitier"}),allergene:"Lactose",unite:"kg",quantite:8,coutU:5.2}),
      new Ingredient({id:"11",nom:"Sucre",categorie:new CategorieAllergene({id:"8",nom:"Aide culinaire"}),allergene:"Aucun",unite:"kg",quantite:11,coutU:0.8})
  ]
}