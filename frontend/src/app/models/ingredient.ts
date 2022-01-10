
export class Ingredient {

    private id_ingredient : number;
    private nom_ingredient : string;
    private id_cat_ingr : number;
    private id_allergene : number;
    private unite : string;
    private quantite_stock : number;
    private cout_unitaire : number;

    constructor(id_ingredient: number, nom_ingredient: string, id_cat_ingr: number, unite: string, quantite_stock: number, cout_unitaire: number,id_allergene : number) {
        this.id_ingredient = id_ingredient;
        this.nom_ingredient = nom_ingredient;
        this.id_cat_ingr = id_cat_ingr;
        this.unite = unite;
        this.quantite_stock = quantite_stock;
        this.cout_unitaire = cout_unitaire;
        this.id_allergene = id_allergene;
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

    getAllergene(): number {
        return this.id_allergene;
    }

    setAllergene(id_allergene: number) {
        this.id_allergene = id_allergene;
    }

    getUnite(): string {
        return this.unite;
    }

    setUnite(unite: string) {
        this.unite = unite;
    }


    getQuantite() {
        return this.quantite_stock;

    }
    setQuantite(quantite_stock: number) {
        this.quantite_stock = quantite_stock;

    }

    getCoutU(): number {
        return this.cout_unitaire;
    }

    setCoutU(cout_unitaire: number) {
        this.cout_unitaire = cout_unitaire;
    }
}