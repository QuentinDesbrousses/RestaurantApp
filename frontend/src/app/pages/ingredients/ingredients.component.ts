import { Component} from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {

  ingredientTab = [
      {
    nom : "Maïs",
    categorie : "Céréale",
    allergene : "Aucun",
    unite : "kg",
    quantite : "3",
    coutU : "0.2"
      },
    {
      nom : "Salade",
      categorie : "Crudité",
      allergene : "Aucun",
      unite : "pièce",
      quantite : "3",
      coutU : "0.7"
    }
  ]
  categorieTab= ['Légume','Fruit','Fromage','Céréale','Crudité']
  allergeneTab = ['Aucun',
    'Arachide',
    'Céleri',
    'Crabe','Crevette','Écrevisse','Homard','Langoustine',
    'Avoine','Blé','Épeautre','Kamut et leurs souches hybridées','Orge','Seigle',
    'Amande','Noisette','Noix','Noix du Brésil','Noix de Cajou','Noix de macadamia','Noix de pécan','Noix de Queensland','Pistache',
    'Lait',
    'Lupin',
    'Oeuf',
    'Poisson',
    'Bulot','Calamar','Escargot','Huitre','Moule','Palourde','Pétoncle','Pieuvre',
    'Moutarde',
    'Sésame',
    'Soja',
    'Sulfites'
  ]

}
