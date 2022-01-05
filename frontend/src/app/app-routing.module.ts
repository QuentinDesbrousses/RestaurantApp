import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AccueilComponent} from './pages/accueil/accueil.component';
import {ConnexionComponent} from './pages/connexion/connexion.component';
import {InscriptionComponent} from './pages/inscription/inscription.component';
import {IngredientsComponent} from "./pages/ingredients/ingredients.component";
import {RecettesComponent} from "./pages/recettes/recettes.component";
import {FicheTechniqueComponent} from "./pages/fiche-technique/fiche-technique.component";
import {AllergenesComponent} from "./pages/allergenes/allergenes.component";
import {UtilisateursComponent} from "./pages/utilisateurs/utilisateurs.component";

const routes: Routes = [

  { path : '', redirectTo: '/', pathMatch: 'full' },
  { path : '', component:AppComponent },
  { path : "accueil", component:AccueilComponent },
  { path : "connexion", component:ConnexionComponent },
  { path : "inscription", component:InscriptionComponent },
  { path : "ingredients", component:IngredientsComponent },
  { path : "allergenes", component:AllergenesComponent },
  { path : "recettes", component:RecettesComponent },
  { path : "ficheTechnique", component:FicheTechniqueComponent },
  { path : "utilisateurs", component:UtilisateursComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
