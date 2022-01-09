
export class Ingredient {

    private id_ingredient : number;
    private nom_ingredient : string;
    private id_cat_ingr : number;
    private unite : string;
    private quantite : number;
    private cout_unitaire : number;

    constructor(id_ingredient: number, nom_ingredient: string, id_cat_ingr: number, unite: string, quantite: number, cout_unitaire: number) {
        this.id_ingredient = id_ingredient;
        this.nom_ingredient = nom_ingredient;
        this.id_cat_ingr = id_cat_ingr;
        this.unite = unite;
        this.quantite = quantite;
        this.cout_unitaire = cout_unitaire;
    }

    getId(): number {
        return this.id_ingredient;
    }

    setId(id_ingredient: number) {
        this.id_ingredient = id_ingredient;
    }

    getNom(): string {
        return this.nom_ingredient;
    }

    setNom(nom_ingredient: string) {
        this.nom_ingredient = nom_ingredient;
    }

    getCategorie(): number {
        return this.id_cat_ingr;
    }

    setCategorie(id_cat_ingr: number) {
        this.id_cat_ingr = id_cat_ingr;
    }

    getUnite(): string {
        return this.unite;
    }

    setUnite(unite: string) {
        this.unite = unite;
    }

    getQuantite(): number {
        return this.quantite;
    }

    setQuantite(quantite: number) {
        this.quantite = quantite;
    }

    getCoutU(): number {
        return this.cout_unitaire;
    }

    setCoutU(cout_unitaire: number) {
        this.cout_unitaire = cout_unitaire;
    }
}