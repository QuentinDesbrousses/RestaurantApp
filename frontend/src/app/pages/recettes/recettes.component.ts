import { Component } from '@angular/core';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.css']
})
export class RecettesComponent {
  categorieTab = ["Entrée","Plat principal","Dessert"]
  etapeTab = [
      "Ajouter le sucre",
      "Ajouter une pincée de sel",
      "Monter les oeufs en neige",
      "Faire fondre le beurre",
      "Beurrer le moule",
      "Faire préchauffer le four à 200°C",
      "Laisser reposer 15 minutes",
      "Mettre au frais pendant 6 heures"
  ]
}
