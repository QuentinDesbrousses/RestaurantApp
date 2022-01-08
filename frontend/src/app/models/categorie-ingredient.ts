export class CategorieIngredient {

    private id_cat_ingr : number;
    private nom_cat_ingr : string;


    constructor(id_cat_ingr: number, nom_cat_ingr: string) {
        this.id_cat_ingr = id_cat_ingr;
        this.nom_cat_ingr = nom_cat_ingr;
    }

    getId() : number {
        return this.id_cat_ingr
    }

    setId(id_cat_al : number){
        this.id_cat_ingr = id_cat_al;
    }

    getNom() : string {
        return this.nom_cat_ingr;
    }

    setNom(nom_cat_al : string){
        this.nom_cat_ingr = nom_cat_al;
    }
}