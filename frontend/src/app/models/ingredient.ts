import {Unite} from "./unite";

export class Ingredient {
    private nom : string;
    private categorie : string;
    private allergene : string;
    private unite : string;
    private quantité : number;
    private coutU : number;


    constructor(nom: string, categorie: string, allergene: string, unite: string, quantité: number, coutU: number) {
        this.nom = nom;
        this.categorie = categorie;
        this.allergene = allergene;
        this.unite = unite;
        this.quantité = quantité;
        this.coutU = coutU;
    }


    getNom(): string {
        return this.nom;
    }

    setNom(value: string) {
        this.nom = value;
    }

    getCategorie(): string {
        return this.categorie;
    }

    setCategorie(value: string) {
        this.categorie = value;
    }

    getAllergene(): string {
        return this.allergene;
    }

    setAllergene(value: string) {
        this.allergene = value;
    }

    getUnite(): string {
        return this.unite;
    }

    setUnite(value: string) {
        this.unite = value;
    }

    getQuantité(): number {
        return this.quantité;
    }

    setQuantité(value: number) {
        this.quantité = value;
    }

    getCoutU(): number {
        return this.coutU;
    }

    setCoutU(value: number) {
        this.coutU = value;
    }
}