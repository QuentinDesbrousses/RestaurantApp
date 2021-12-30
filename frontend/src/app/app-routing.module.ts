import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AccueilComponent } from './pages/accueil/accueil.component';
import {ConnexionComponent } from './pages/connexion/connexion.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import {IngredientFormComponent} from "./components/forms/ingredient-form/ingredient-form.component";
import {IngredientsComponent} from "./pages/ingredients/ingredients.component";
import {RecettesComponent} from "./pages/recettes/recettes.component";
import {FicheTechniqueComponent} from "./pages/fiche-technique/fiche-technique.component";

const routes: Routes = [

  { path : '', redirectTo: '/', pathMatch: 'full' },
  { path : '', component:AppComponent },
  { path : "accueil", component:AccueilComponent },
  { path : "connexion", component:ConnexionComponent },
  { path : "inscription", component:InscriptionComponent },
  { path : "creationIngredient", component:IngredientFormComponent },
  { path : "ingredients", component:IngredientsComponent },
  { path : "recettes", component:RecettesComponent },
  { path : "ficheTechnique", component:FicheTechniqueComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
