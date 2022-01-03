export class CategorieIngredient {

    private id : string;
    private nom : string;


    constructor(catIngr:{id: string, nom: string}) {
        this.id = catIngr.id;
        this.nom = catIngr.nom;
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
}