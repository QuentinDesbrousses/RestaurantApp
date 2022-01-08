export class Allergene {

    private id_allergene : number;
    private nom_allergene : string;
    private id_cat_al : number;


    constructor(id_allergene: number, nom_allergene: string, id_cat_al: number) {
        this.id_allergene = id_allergene;
        this.nom_allergene = nom_allergene;
        this.id_cat_al = id_cat_al;
    }

    getId() : number {
        return this.id_allergene
    }

    setId(id_allergene : number){
        this.id_allergene = id_allergene;
    }

    getNom() : string {
        return this.nom_allergene;
    }

    setNom(nom_allergene : string){
        this.nom_allergene = nom_allergene;
    }

    getCategorieId() : number {
        return this.id_cat_al;
    }

    setCateggorie(id_cat_al : number){
        this.id_cat_al = id_cat_al;
    }
}