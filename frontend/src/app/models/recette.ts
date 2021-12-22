import {Etape} from "./etape";

export class Recette {
    private id : string;
    private titre : string;
    private description : string;
    private etapes : [Etape];
    private categorie : string;
    private nbcouvert : number;
    private temps : number; //nombre de minutes


    constructor(id: string, titre: string, description: string, etapes: [Etape], categorie: string, nbcouvert: number, temps: number) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.etapes = etapes;
        this.categorie = categorie;
        this.nbcouvert = nbcouvert;
        this.temps = temps;
    }

    getId() : string {
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
        return this.nbcouvert;
    }

    setNbCouvert(nbCouvert : number) {
        this.nbcouvert = nbCouvert;
    }

    getTemps() : number {
        return this.temps;
    }

    setTemps(temps : number) {
        this.temps = temps;
    }
}