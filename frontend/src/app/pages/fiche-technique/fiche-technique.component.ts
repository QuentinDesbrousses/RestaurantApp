import {AfterViewInit, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FicheTechniqueService} from "../../services/fiche-technique/fiche-technique.service";
import {Recette} from "../../models/recette";
import {CategorieRecette} from "../../models/categorie-recette";
import {CategorieRecetteService} from "../../services/categorie-recette/categorie-recette.service";
import {FicheTechnique} from "../../models/fiche-technique";

@Component({
  selector: 'app-fiche-technique',
  templateUrl: './fiche-technique.component.html',
  styleUrls: ['./fiche-technique.component.css']
})
export class FicheTechniqueComponent {

  constructor(public service: FicheTechniqueService,
              public dialogRef: MatDialogRef<FicheTechniqueComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {recette : Recette}) {


  }
  fiche = new FicheTechnique(1,this.data.recette,0,0.1,0.05,true,10,5,0.2,1);

}
