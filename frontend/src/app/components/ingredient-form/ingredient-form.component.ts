import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent {
  constructor(private fb: FormBuilder) { }
  creationIngredient = this.fb.group({
    nom : ['',Validators.required],
    categorie : ['Légume',Validators.required],
    allergene : ['Aucun',Validators.required],
    unite : ['',Validators.required],
    quantite : ['',Validators.required],
    coutU : ['',Validators.required],

  })



  categories = ['Légume','Fruit','Fromage']
  allergenes = ['Aucun',
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

  onSubmit(){
    console.log(this.creationIngredient.value)
  }

}
