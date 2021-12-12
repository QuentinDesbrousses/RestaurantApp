import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AccueilComponent } from './pages/accueil/accueil.component';
import {ConnexionComponent } from './pages/connexion/connexion.component';
import { ConsultationFicheComponent } from './pages/consultation-fiche/consultation-fiche.component';
import { CreationFicheComponent } from './pages/creation-fiche/creation-fiche.component';
import { GestionIngredientComponent } from './pages/gestion-ingredient/gestion-ingredient.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {IngredientFormComponent} from "./components/ingredient-form/ingredient-form.component";

const routes: Routes = [

  { path : '', redirectTo: '/', pathMatch: 'full' },
  { path : '', component:AppComponent },
  { path : "accueil", component:AccueilComponent },
  { path : "connexion", component:ConnexionComponent },
  { path : "inscription", component:InscriptionComponent },
  { path : "consultationFiche", component:ConsultationFicheComponent },
  { path : "creationFiche", component:CreationFicheComponent },
  { path : "gestionIngredient", component:GestionIngredientComponent },
  { path : "creationIngredient", component:IngredientFormComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
