import {Optional} from "@angular/core";
import {Etape} from "./etape";

export class Recette {

    private id_recette : number;
    private id_categorie : number;
    private id_utilisateur : number;
    private titre_recette : string;
    private description_recette : string;
    private nb_couvert : number;
    private temps_recette : number; //nombre de minutes


    constructor(id_recette: number, id_categorie: number, id_utilisateur: number, titre_recette: string, description_recette: string, nb_couvert: number, temps_recette: number) {
        this.id_recette = id_recette;
        this.id_categorie = id_categorie;
        this.id_utilisateur = id_utilisateur;
        this.titre_recette = titre_recette;
        this.description_recette = description_recette;
        this.nb_couvert = nb_couvert;
        this.temps_recette = temps_recette;
    }

    getId() : number {
        return this.id_recette;
    }

    setId(id_recette : number){
        this.id_recette = id_recette;
    }

    getTitre() : string {
        return this.titre_recette;
    }

    setTitre(titre_recette : string) {
        this.titre_recette = titre_recette;
    }

    getDescription() : string {
        return this.description_recette;
    }

    setDescription(description_recette : string) {
        this.description_recette = description_recette;
    }

    getCategorie() : number {
        return this.id_categorie;
    }

    setCategorie(id_categorie : number) {
        this.id_categorie = id_categorie;
    }

    getUtilisateur() : number {
        return this.id_utilisateur;
    }

    setUtilisateur(id_utilisateur : number) {
        this.id_utilisateur = id_utilisateur;
    }

    getNbCouvert() : number {
        return this.nb_couvert;
    }

    setNbCouvert(nb_couvert : number) {
        this.nb_couvert = nb_couvert;
    }

    getTemps() : number {
        return this.temps_recette;
    }

    setTemps(temps_recette : number) {
        this.temps_recette = temps_recette;
    }
}