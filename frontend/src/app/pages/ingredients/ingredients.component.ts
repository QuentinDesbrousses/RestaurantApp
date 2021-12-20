import { Component} from '@angular/core';
import {Ingredient} from "../../models/ingredient";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  ingredientTab : Ingredient[] = [
      new Ingredient({nom:"Maïs",categorie:"Céréale",allergene:"Aucun",unite:"kg",quantite:3,coutU:1.5}),
      new Ingredient({nom:"Salade",categorie:"Légume",allergene:"Aucun",unite:"pièce",quantite:3,coutU:1.3}),
      new Ingredient({nom:"Farine",categorie:"Céréale",allergene:"Gluten",unite:"kg",quantite:20,coutU:0.7}),
      new Ingredient({nom:"Pomme",categorie:"Fruit",allergene:"Aucun",unite:"kg",quantite:15,coutU:3}),
      new Ingredient({nom:"Carotte",categorie:"Légume",allergene:"Aucun",unite:"kg",quantite:10,coutU:1.2}),
      new Ingredient({nom:"Lait",categorie:"Produit laitier",allergene:"Lactose",unite:"L",quantite:12,coutU:0.6}),
      new Ingredient({nom:"Poulet",categorie:"Viande",allergene:"Aucun",unite:"kg",quantite:13,coutU:9}),
      new Ingredient({nom:"Saucisse",categorie:"Viande",allergene:"Aucun",unite:"kg",quantite:10,coutU:5}),
      new Ingredient({nom:"Saumon",categorie:"Poisson",allergene:"Aucun",unite:"kg",quantite:3,coutU:25}),
      new Ingredient({nom:"Beurre",categorie:"Produit laitier",allergene:"Lactose",unite:"kg",quantite:8,coutU:5.2}),
      new Ingredient({nom:"Sucre",categorie:"Aide culinaire",allergene:"Aucun",unite:"kg",quantite:11,coutU:0.8})
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