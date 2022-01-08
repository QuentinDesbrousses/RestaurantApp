export class CategorieRecette {
    private id_categorie : number;
    private nom_categorie : string;


    constructor(id_categorie: number, nom_categorie: string) {
        this.id_categorie = id_categorie;
        this.nom_categorie = nom_categorie;
    }

    getId() : number {
        return this.id_categorie
    }

    setId(id_categorie : number){
        this.id_categorie = id_categorie;
    }

    getNom() : string {
        return this.nom_categorie;
    }

    setNom(nom_categorie : string){
        this.nom_categorie = nom_categorie;
    }
}