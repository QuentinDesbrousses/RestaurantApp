import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.css']
})
export class InscriptionFormComponent {

  constructor(private fb : FormBuilder) {
  }
  inscriptionForm = this.fb.group({
    email : ['',Validators.required],
    password1 : ['',Validators.required],
    password2 : ['',Validators.required]
  })

  inscription() {
    console.log(this.inscriptionForm.value)
  }

}
