import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RootComponent } from './root/root.component';
import { IngredientFormComponent } from './components/forms/ingredient-form/ingredient-form.component';
import { RecetteFormComponent } from './components/forms/recette-form/recette-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import { ReactiveFormsModule } from '@angular/forms';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { RecettesComponent } from './pages/recettes/recettes.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { InscriptionFormComponent } from './components/forms/inscription-form/inscription-form.component';
import { ModalComponent } from './components/modal/modal.component';
import { IngredientListComponent } from './components/listes/ingredient-list/ingredient-list.component';
import { RecetteListComponent } from './components/listes/recette-list/recette-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    InscriptionComponent,
    ConnexionComponent,
    NavbarComponent,
    RootComponent,
    IngredientFormComponent,
    RecetteFormComponent,
    IngredientsComponent,
    RecettesComponent,
    LoginFormComponent,
    InscriptionFormComponent,
    ModalComponent,
    IngredientListComponent,
    RecetteListComponent,
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
        MatToolbarModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        ReactiveFormsModule,
        DragDropModule,
        MatTableModule,
        MatPaginatorModule
    ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
