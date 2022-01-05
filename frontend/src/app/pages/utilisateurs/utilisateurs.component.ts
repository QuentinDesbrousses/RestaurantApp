import { Component } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent {
  utilisateursTab : Utilisateur[] = [
    new Utilisateur({id:"1",nom:"Fernique",prenom:"Alexandre",description:"BG",email:"alexandre@fernique.fr"}),
    new Utilisateur({id:"2",nom:"Gomez",prenom:"Alexandre",description:"le DO3",email:"alexandre.gomez@etu.umontpellier.fr"}),
    new Utilisateur({id:"3",nom:"Desbrousses",prenom:"Quentin",description:"Valorant player",email:"q.desbrousses@gmail.com"}),
    new Utilisateur({id:"4",nom:"Laroui",prenom:"Marouan",description:"Pizza maker",email:"marouan.laroui@etu.umontpellier.fr"}),
  ]
}
