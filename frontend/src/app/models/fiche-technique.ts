
export class FicheTechnique {

    private id_fiche : number;
    private id_recette : number;
    private stock : number;
    private tva : number;
    private coef_fluide : number;
    private coef_pers : number;
    private cout_production : number;
    private cout_horaire : number;
    private prix_vente : number;

    constructor(id_fiche: number, id_recette: number, stock: number, tva: number, coef_fluide: number, coef_pers: number, cout_production: number, cout_horaire: number, prix_vente: number) {
        this.id_fiche = id_fiche;
        this.id_recette = id_recette;
        this.stock = stock;
        this.tva = tva;
        this.coef_fluide = coef_fluide;
        this.coef_pers = coef_pers;
        this.cout_production = cout_production;
        this.cout_horaire = cout_horaire;
        this.prix_vente = prix_vente;
    }

    getId() : number {
        return this.id_fiche
    }

    setId(id_fiche : number){
        this.id_fiche = this.id_fiche;
    }

    getRecette(): number {
        return this.id_recette;
    }

    setRecette(id_recette : number){
        this.id_recette = id_recette;
    }

    getStock(): number {
        return this.stock;
    }

    setStock(stock : number){
        this.stock = stock;
    }

    getTva() : number {
        return this.tva;
    }

    setTva(tva : number){
        this.tva = tva;
    }

    getCoefFluide() : number {
        return this.coef_fluide;
    }

    setCoefFluide(corf_fluide : number){
        this.coef_fluide = corf_fluide;
    }

    getCoefPers() : number {
        return this.coef_pers;
    }

    setCoefPers(coef_pers: number){
        this.coef_pers = coef_pers;
    }

}