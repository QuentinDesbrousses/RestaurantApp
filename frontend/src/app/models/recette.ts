import {Etape} from "./etape";
import {CategorieRecette} from "./categorie-recette";

export class Recette {

    private id : string;
    private titre : string;
    private description : string;
    private etapes : [Etape];
    private categorie : CategorieRecette;
    private nbCouvert : number;
    private temps : number; //nombre de minutes


    constructor(recette:{id: string, titre: string, description: string, etapes: [Etape], categorie: CategorieRecette, nbCouvert: number, temps: number}) {
        this.id = recette.id;
        this.titre = recette.titre;
        this.description = recette.description;
        this.etapes = recette.etapes;
        this.categorie = recette.categorie;
        this.nbCouvert = recette.nbCouvert;
        this.temps = recette.temps;
    }

    getId() : string {
        return this.id;
    }

    setId(id : string){
        this.id = id;
    }

    getTitre() : string {
        return this.titre;
    }

    setTitre(titre : string) {
        this.titre = titre;
    }

    getDescription() : string {
        return this.description;
    }

    setDescription(description : string) {
        this.description= description;
    }

    getEtapes() : [Etape] {
        return this.etapes;
    }

    setEtapes(etapes : [Etape]) {
        this.etapes = etapes;
    }

    getCategorie() : CategorieRecette {
        return this.categorie;
    }

    setCategorie(categorie : CategorieRecette) {
        this.categorie = categorie;
    }

    getNbCouvert() : number {
        return this.nbCouvert;
    }

    setNbCouvert(nbCouvert : number) {
        this.nbCouvert = nbCouvert;
    }

    getTemps() : number {
        return this.temps;
    }

    setTemps(temps : number) {
        this.temps = temps;
    }
}