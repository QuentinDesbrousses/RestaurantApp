export class CategorieAllergene {

    private id_cat_al : number;
    private nom_cat_al : string;


    constructor(id_cat_al: number, nom_cat_al: string) {
        this.id_cat_al = id_cat_al;
        this.nom_cat_al = nom_cat_al;
    }

    getId() : number {
        return this.id_cat_al
    }

    setId(id_cat_al : number){
        this.id_cat_al = id_cat_al;
    }

    getNom() : string {
        return this.nom_cat_al;
    }

    setNom(nom_cat_al : string){
        this.nom_cat_al = nom_cat_al;
    }

}