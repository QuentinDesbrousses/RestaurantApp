import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private fb : FormBuilder) {
  }
  loginForm = this.fb.group({
    email : ['',Validators.required],
    password : ['',Validators.required]
      })

  login() {
    console.log(this.loginForm.value)
  }

}
