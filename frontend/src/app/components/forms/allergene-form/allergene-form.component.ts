import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AllergeneService} from "../../../services/allergene/allergene.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Allergene} from "../../../models/allergene";
import {CategorieAllergene} from "../../../models/categorie-allergene";
import { CategorieAllergeneService } from 'src/app/services/categorie-allergene/categorie-allergene.service';

@Component({
  selector: 'app-allergene-form',
  templateUrl: './allergene-form.component.html',
  styleUrls: ['./allergene-form.component.css']
})
export class AllergeneFormComponent implements OnInit {
  AllergeneForm : FormGroup;
  categories : CategorieAllergene[] = [];

  constructor(public service : AllergeneService,public sca : CategorieAllergeneService, public dialogRef: MatDialogRef<AllergeneFormComponent>,@Inject(MAT_DIALOG_DATA) public data: {id:number,type: string}) {
    this.AllergeneForm = new FormGroup({
      $id : new FormControl(null),
      nom : new FormControl('',Validators.required),
      categorie : new FormControl('')
    })
  }

  ngOnInit(){
    this.categories = this.sca.getAllCategorieAllergene();
  }

  onSubmit(){
    console.log("c'est id"+this.data.id);
    var cat : number = 0;
    this.categories.forEach(c=>{if(this.AllergeneForm.value.categorie==c.getNom()){cat = c.getId()}})
    const nb : number = this.data.id;
    this.sca.deleteCategorieAllergene(nb);
    let tmpAllergene = new Allergene(this.AllergeneForm.value.id,this.AllergeneForm.value.nom,cat);
    if(this.data.type == "creation"){
      this.service.createAllergene(tmpAllergene);
      console.log("Allergène créé : "+tmpAllergene);
    }
    else if(this.data.type == "modification"){
      this.service.modifyAllergene(this.AllergeneForm.value.id,tmpAllergene)
      console.log("Allergène modifié : "+tmpAllergene);
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
