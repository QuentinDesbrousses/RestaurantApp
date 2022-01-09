import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FicheTechniqueService} from "../../services/fiche-technique/fiche-technique.service";
import {Recette} from "../../models/recette";

@Component({
  selector: 'app-fiche-technique',
  templateUrl: './fiche-technique.component.html',
  styleUrls: ['./fiche-technique.component.css']
})
export class FicheTechniqueComponent{

  constructor(public service: FicheTechniqueService,
              public dialogRef: MatDialogRef<FicheTechniqueComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {recette : Recette}) { }
}
