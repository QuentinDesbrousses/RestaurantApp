import {CategorieAllergene} from "./categorie-allergene";

export class Allergene {

    private id : string;
    private nom : string;
    private categorie : CategorieAllergene;


    constructor(catAl:{id: string, nom: string, categorie : CategorieAllergene}) {
        this.id = catAl.id;
        this.nom = catAl.nom;
        this.categorie = catAl.categorie;
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