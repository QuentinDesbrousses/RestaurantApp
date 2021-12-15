import { Component } from '@angular/core';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent {
  categorieTab = ["Entrée","Plat principal","Dessert"]
  etapeTab = ["Ajouter le sucre","Ajouter une pincée de sel","Monter les oeufs en neige"]
}
