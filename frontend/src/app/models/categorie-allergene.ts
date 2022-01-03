export class CategorieAllergene {

    private id : string;
    private nom : string;


    constructor(catAl:{id: string, nom: string}) {
        this.id = catAl.id;
        this.nom = catAl.nom;
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