import {Etape} from "./etape";

export class Recette {
    private id : number = 0;
    private titre : string;
    private description : string;
    private etapes : [Etape];
    private categorie : string;
    private nbCouvert : number;
    private temps : number; //nombre de minutes


    constructor(recette:{titre: string, description: string, etapes: [Etape], categorie: string, nbCouvert: number, temps: number}) {
        this.id += 1;
        this.titre = recette.titre;
        this.description = recette.description;
        this.etapes = recette.etapes;
        this.categorie = recette.categorie;
        this.nbCouvert = recette.nbCouvert;
        this.temps = recette.temps;
    }

    getId() : number {
        return this.id;
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

    getEtape() : [Etape] {
        return this.etapes;
    }

    setEtapes(etapes : [Etape]) {
        this.etapes = etapes;
    }

    getCategorie() : string {
        return this.categorie;
    }

    setCategorie(categorie : string) {
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