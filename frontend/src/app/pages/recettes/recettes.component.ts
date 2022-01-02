import { Component } from '@angular/core';
import {Recette} from "../../models/recette";
import {Etape} from "../../models/etape";
import {Ingredient} from "../../models/ingredient";

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent {
    recetteTab : Recette[] = [
        new Recette({titre:'Crêpes',description:'Crêpes bretonnes',etapes:[new Etape("Lait","Ajouter le lait",[new Ingredient({nom:"lait",categorie:"Lactose",allergene:"Lactose",unite:"kg",quantite:0.5,coutU:0.8})],5,0.8)],categorie:'Dessert',nbCouvert:8,temps:15}),
        new Recette({titre:'Gaufres',description:'Gaufres de Cyril',etapes:[new Etape("Lait","Ajouter le lait",[new Ingredient({nom:"lait",categorie:"Lactose",allergene:"Lactose",unite:"kg",quantite:0.5,coutU:0.8})],5,0.8)],categorie:'Dessert',nbCouvert:8,temps:15})
    ]
}
