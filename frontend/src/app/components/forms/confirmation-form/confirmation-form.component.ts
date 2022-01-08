import {Component, Inject} from '@angular/core';
import {IngredientService} from "../../../services/ingredient/ingredient.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {RecetteService} from "../../../services/recette/recette.service";
import {AllergeneService} from "../../../services/allergene/allergene.service";
import {CategorieAllergeneService} from "../../../services/categorie-allergene/categorie-allergene.service";
import {CategorieIngredientService} from "../../../services/categorie-ingredient/categorie-ingredient.service";
import {CategorieRecetteService} from "../../../services/categorie-recette/categorie-recette.service";
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import {FicheTechniqueService} from "../../../services/fiche-technique/fiche-technique.service";
import {EtapeService} from "../../../services/etape/etape.service";

@Component({
  selector: 'app-confirmation-form',
  templateUrl: './confirmation-form.component.html',
  styleUrls: ['./confirmation-form.component.css']
})
export class ConfirmationFormComponent {
  confirmationForm : FormGroup;

  constructor(private ingredientService : IngredientService,
              private categorieIngredientService : CategorieIngredientService,
              private recetteService : RecetteService,
              private categorieRecetteService : CategorieRecetteService,
              private etapeService : EtapeService,
              private allergeneService : AllergeneService,
              private categorieAllergeneService : CategorieAllergeneService,
              private ficheService : FicheTechniqueService,
              private utilisateurService : UtilisateurService,
              public dialogRef: MatDialogRef<ConfirmationFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {id:number, type:string}) {

    this.confirmationForm  = new FormGroup({
      $id : new FormControl(null)
    })
  }

  supprimer(){
    if(this.data.type == "ingredient"){
      console.log("Demande de suppression de l'ingrédient : "+this.data.id);
      this.ingredientService.deleteIngredient(this.data.id)
    }
    else if(this.data.type == "categorie-ingredient"){
      console.log("Demande de suppression de la catégorie d'ingrédient' : "+this.data.id);
      this.categorieIngredientService.deleteCategorieIngredient(this.data.id)
    }
    else if(this.data.type == "recette"){
      this.recetteService.deleteRecette(this.data.id)
      console.log("Confirmation de suppression de la recette : "+this.data.id);
    }
    else if(this.data.type == "categorie-recette"){
      this.categorieRecetteService.deleteCategorieRecette(this.data.id)
      console.log("Confirmation de suppression de la catégorie de recette' : "+this.data.id);
    }
    else if(this.data.type == "etape"){
      this.etapeService.deleteEtape(this.data.id)
      console.log("Confirmation de suppression de la catégorie de recette' : "+this.data.id);
    }
    else if(this.data.type == "allergene"){
      this.allergeneService.deleteAllergene(this.data.id)
      console.log("Confirmation de suppression de l'allergène : "+this.data.id);
    }
    else if(this.data.type == "categorie-allergene"){
      this.categorieAllergeneService.deleteCategorieAllergene(this.data.id)
      console.log("Confirmation de suppression de la catégorie d'allergène : "+this.data.id);
    }
    else if(this.data.type == "utilisateur"){
      this.utilisateurService.deleteUtilisateur(this.data.id)
      console.log("Confirmation de suppression de l'utilisateur : "+this.data.id);
    }
    else if(this.data.type == "fiche"){
      this.ficheService.deleteFiche(this.data.id)
      console.log("Confirmation de suppression de la fiche technique : "+this.data.id);
    }

    else{
      console.log("La valeur du paramètre data.type n'est pas reconnue");
    }
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }
}
