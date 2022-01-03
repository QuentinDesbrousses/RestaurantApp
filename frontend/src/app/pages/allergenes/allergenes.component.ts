import { Component } from '@angular/core';
import {Allergene} from "../../models/allergene";
import {CategorieAllergene} from "../../models/categorie-allergene";

@Component({
  selector: 'app-allergenes',
  templateUrl: './allergenes.component.html',
  styleUrls: ['./allergenes.component.css']
})
export class AllergenesComponent{
  allergeneTaB : Allergene[] = [
    new Allergene({id: "1", nom: "Lait", categorie: new CategorieAllergene({id: "1", nom: "Lactose"})}),
    new Allergene({id: "2", nom: "Moules", categorie: new CategorieAllergene({id: "2", nom: "Crustacés"})}),
    new Allergene({id: "3", nom: "Noix", categorie: new CategorieAllergene({id: "3", nom: "Fruit à coque"})})
  ]

}
