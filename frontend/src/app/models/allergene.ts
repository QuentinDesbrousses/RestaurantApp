import {CategorieAllergene} from "./categorie-allergene";

export class Allergene {

    private id : string;
    private nom : string;
    private categorie : CategorieAllergene;


    constructor(allergene:{id: string, nom: string, categorie : CategorieAllergene}) {
        this.id = allergene.id;
        this.nom = allergene.nom;
        this.categorie = allergene.categorie;
    }

    getId() : string {
        return this.id
    }

    setId(id : string){
        this.id = id;
    }

    getNom() : string {
        return this.nom;
    }

    setNom(nom : string){
        this.nom = nom;
    }

    getCategorie() : CategorieAllergene {
        return this.categorie;
    }

    setCateggorie(categorie : CategorieAllergene){
        this.categorie = categorie;
    }
}