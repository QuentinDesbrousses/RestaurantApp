import {Component, Input, OnInit} from '@angular/core';
import {IngredientService} from "../../../services/ingredient.service";

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent {
  categories = [''];
  allergenes = [''];

  constructor(public service : IngredientService) {
    this.categories = ['Légume','Fruit','Fromage','Céréale','Crudité'];
    this.allergenes = ['Aucun',
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
}
