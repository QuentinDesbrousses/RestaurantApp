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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { RecettesComponent } from './pages/recettes/recettes.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { InscriptionFormComponent } from './components/forms/inscription-form/inscription-form.component';
import { IngredientListComponent } from './components/listes/ingredient-list/ingredient-list.component';
import { RecetteListComponent } from './components/listes/recette-list/recette-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { FicheTechniqueComponent } from './pages/fiche-technique/fiche-technique.component';
import { ConfirmationFormComponent } from './components/forms/confirmation-form/confirmation-form.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AllergenesComponent } from './pages/allergenes/allergenes.component';
import { AllergeneListComponent } from './components/listes/allergene-list/allergene-list.component';
import { EtapeListComponent } from './components/listes/etape-list/etape-list.component';
import { FicheListComponent } from './components/listes/fiche-list/fiche-list.component';
import { CategorieAllergeneListComponent } from './components/listes/categorie-allergene-list/categorie-allergene-list.component';
import { CategorieIngredientListComponent } from './components/listes/categorie-ingredient-list/categorie-ingredient-list.component';
import { CategorieRecetteListComponent } from './components/listes/categorie-recette-list/categorie-recette-list.component';
import { UtilisateurListComponent } from './components/listes/utilisateur-list/utilisateur-list.component';
import { AllergeneFormComponent } from './components/forms/allergene-form/allergene-form.component';
import { EtapeFormComponent } from './components/forms/etape-form/etape-form.component';
import { FicheFormComponent } from './components/forms/fiche-form/fiche-form.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { CategorieFormComponent } from './components/forms/categorie-form/categorie-form.component';


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
    IngredientListComponent,
    RecetteListComponent,
    FicheTechniqueComponent,
    ConfirmationFormComponent,
    AllergenesComponent,
    AllergeneListComponent,
    EtapeListComponent,
    FicheListComponent,
    CategorieAllergeneListComponent,
    CategorieIngredientListComponent,
    CategorieRecetteListComponent,
    UtilisateurListComponent,
    AllergeneFormComponent,
    EtapeFormComponent,
    FicheFormComponent,
    UtilisateursComponent,
    CategorieFormComponent
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
        MatPaginatorModule,
        MatSortModule,
        FormsModule,
        MatDialogModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [RootComponent],
  entryComponents :[IngredientFormComponent,RecetteFormComponent]
})
export class AppModule { }
