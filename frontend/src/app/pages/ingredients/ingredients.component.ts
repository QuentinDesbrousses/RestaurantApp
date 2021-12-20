import { Component} from '@angular/core';
import {Ingredient} from "../../models/ingredient";
import {Unite} from "../../models/unite";
import {newArray} from "@angular/compiler/src/util";
import {IngredientInterface} from "../../components/listes/ingredient-list/ingredient-list.component";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  ingredientTab : IngredientInterface[] = [
    {nom:"Maïs",categorie:"Céréale",allergene:"Aucun",unite:"kg",quantite:3,coutU:1.5},
    {nom:"Salade",categorie:"Crudité",allergene:"Aucun",unite:"pièce",quantite:3,coutU:1.3},
    {nom:"Farine",categorie:"Céréale",allergene:"Gluten",unite:"kg",quantite:20,coutU:0.7},
    {nom:"Pomme",categorie:"Fruit",allergene:"Aucun",unite:"kg",quantite:15,coutU:3},
    {nom:"Carotte",categorie:"Légume",allergene:"Aucun",unite:"kg",quantite:10,coutU:1.2},
    {nom:"Lait",categorie:"Produit laitier",allergene:"Lactose",unite:"1L",quantite:12,coutU:0.6},
    {nom:"Poulet",categorie:"Viande",allergene:"Aucun",unite:"kg",quantite:13,coutU:9},
    {nom:"Saucisse",categorie:"Viande",allergene:"Aucun",unite:"kg",quantite:10,coutU:5},
    {nom:"Saumon",categorie:"Poisson",allergene:"Aucun",unite:"kg",quantite:3,coutU:25},
    {nom:"Beurre",categorie:"Produit laitier",allergene:"Lactose",unite:"kg",quantite:8,coutU:5.2}
  ]
  categorieTab= ['Légume','Fruit','Fromage','Céréale','Crudité']
  allergeneTab = ['Aucun',
    'Arachide',
    'Céleri',
    'Crabe','Crevette','Écrevisse','Homard','Langoustine',
    'Avoine','Blé','Épeautre','Kamut et leurs souches hybridées','Orge','Seigle',
    'Amande','Noisette','Noix','Noix du Brésil','Noix de Cajou','Noix de macadamia','Noix de pécan','Noix de Queensland','Pistache',
    'Lactose',
    'Lupin',
    'Oeuf',
    'Poisson',
    'Bulot','Calamar','Escargot','Huitre','Moule','Palourde','Pétoncle','Pieuvre',
    'Moutarde',
    'Sésame',
    'Soja',
    'Sulfites'
  ];

}