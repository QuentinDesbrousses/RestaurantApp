import {Component, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {RecetteService} from "../../../services/recette.service";

@Component({
  selector: 'app-recette-form',
  templateUrl: './recette-form.component.html',
  styleUrls: ['./recette-form.component.css']
})
export class RecetteFormComponent {
  etapes = [""];
  categories = [""];

  constructor(public service : RecetteService) {
    this.categories = ["Entrée","Plat principal","Dessert"];
    this.etapes = [
      "Ajouter le sucre",
      "Ajouter une pincée de sel",
      "Monter les oeufs en neige",
      "Faire fondre le beurre",
      "Beurrer le moule",
      "Faire préchauffer le four à 200°C",
      "Laisser reposer 15 minutes",
      "Mettre au frais pendant 6 heures"
    ];
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.etapes, event.previousIndex, event.currentIndex);
  }
}
