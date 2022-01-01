import { Component } from '@angular/core';

@Component({
  selector: 'app-verification-popup',
  templateUrl: './verification-popup.component.html',
  styleUrls: ['./verification-popup.component.css']
})
export class VerificationPopupComponent {

  constructor() { }

  supprimer(){
    //TODO Link with controller
    console.log("confirmation de suppression");
  }

}
