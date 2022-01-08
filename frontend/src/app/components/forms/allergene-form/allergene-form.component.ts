import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AllergeneService} from "../../../services/allergene/allergene.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Allergene} from "../../../models/allergene";
import {CategorieAllergene} from "../../../models/categorie-allergene";

@Component({
  selector: 'app-allergene-form',
  templateUrl: './allergene-form.component.html',
  styleUrls: ['./allergene-form.component.css']
})
export class AllergeneFormComponent {
  AllergeneForm : FormGroup;

  constructor(public service : AllergeneService, public dialogRef: MatDialogRef<AllergeneFormComponent>,@Inject(MAT_DIALOG_DATA) public data: {id:string,type: string,categories:CategorieAllergene[]}) {
    this.AllergeneForm = new FormGroup({
      $id : new FormControl(null),
      nom : new FormControl('',Validators.required),
      categorie : new FormControl('',Validators.required)
    })
  }
  onSubmit(){
    let tmpAllergene = new Allergene(this.AllergeneForm.value.id,this.AllergeneForm.value.nom,this.AllergeneForm.value.categorie);
    if(this.data.type == "creation"){
      this.service.createAllergene(tmpAllergene);
      console.log("Allergène créé : "+tmpAllergene)
    }
    else if(this.data.type == "modification"){
      this.service.modifyAllergene(this.AllergeneForm.value.id,tmpAllergene)
    }
    else{
      console.log("data.type doit être égal à creation ou modification")
    }
    this.dialogRef.close();
  }
  cancel(){
    this.dialogRef.close();
  }

}
