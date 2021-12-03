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
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { RecetteFormComponent } from './components/recette-form/recette-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LandingComponent } from './components/landing-component/landing.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from '@angular/material/toolbar';

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
    RecetteFormComponent,
    LandingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
