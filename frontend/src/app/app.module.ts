import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { GestionIngredientComponent } from './pages/gestion-ingredient/gestion-ingredient.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RootComponent } from './root/root.component';
import { CreationFicheComponent } from './pages/creation-fiche/creation-fiche.component';
import { ConsultationFicheComponent } from './pages/consultation-fiche/consultation-fiche.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { RecetteFormComponent } from './recette-form/recette-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    InscriptionComponent,
    ConnexionComponent,
    GestionIngredientComponent,
    NavbarComponent,
    RootComponent,
    CreationFicheComponent,
    ConsultationFicheComponent,
    IngredientFormComponent,
    RecetteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
