import {Recette} from "./recette";
import {Etape} from "./etape";
import {Ingredient} from "./ingredient";

export class FicheTechnique {

    private id_fiche : number;
    private recette : Recette;
    private stock : number;
    private tva : number;
    private assaisonnement : number;
    private type_assaisonnement : boolean; //true if %
    private cout_horaire_personnel : number;
    private cout_horaire_fluide : number;
    private marge : number;
    private multiple : number;


    constructor(id_fiche: number, recette: Recette, stock: number, tva: number, assaisonnement: number, type_assaisonnement: boolean, cout_horaire_personnel: number, cout_horaire_fluide: number, marge: number, multiple: number) {
        this.id_fiche = id_fiche;
        this.recette = recette;
        this.stock = stock;
        this.tva = tva;
        this.assaisonnement = assaisonnement;
        this.type_assaisonnement = type_assaisonnement;
        this.cout_horaire_personnel = cout_horaire_personnel;
        this.cout_horaire_fluide = cout_horaire_fluide;
        this.marge = marge;
        this.multiple = multiple;
    }

    getId() : number {
        return this.id_fiche
    }

    setId(id_fiche : number){
        this.id_fiche = this.id_fiche;
    }

    getRecette(): Recette {
        return this.recette;
    }

    setRecette(recette : Recette){
        this.recette = recette;
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

    getAssaisonnement() : number {
        return this.assaisonnement;
    }

    setAssaisonnement(assaisonnement : number){
        this.tva = assaisonnement;
    }

    getTypeAssaisonnement() : boolean{
        return this.type_assaisonnement;
    }

    setTypeAssaisonnement(typeAssaisonnement : boolean){
        this.type_assaisonnement = typeAssaisonnement;
    }

    getCoutHPers() : number {
        return this.cout_horaire_personnel;
    }

    setCoutHPers(cout_horaire_personnel : number){
        this.cout_horaire_personnel = cout_horaire_personnel;
    }

    getCoutHFluide() : number {
        return this.cout_horaire_fluide;
    }

    setCoutHFluide(cout_horaire_fluide : number){
        this.cout_horaire_fluide = cout_horaire_fluide;
    }

    getMarge() : number {
        return this.marge;
    }

    setMarge(marge : number){
        this.marge = marge;
    }

    getMultiple() : number {
        return this.multiple;
    }

    setMultiple(multiple : number){
        this.multiple = multiple;
    }


    getCoutMatiere(ingredients : [{ ingredient : Ingredient, quantite : number }]){
        var coutM = 0;
        ingredients.forEach(i=>{
            coutM += i.ingredient.getCoutU()*i.quantite;
        })
        if(this.type_assaisonnement){
            coutM *= (1+this.assaisonnement);
        }
        else {
            coutM += this.assaisonnement;
        }
        return coutM;
    }

    getCoutCharges(etapes : Etape[]){
        var coutPers = 0;
        var coutFluide = 0;
        etapes.forEach(e=>{
            coutPers += e.getTemps()*this.cout_horaire_personnel
            coutFluide += e.getTemps()*this.cout_horaire_fluide
        })
        let coutCharges = coutFluide + coutPers;
        return [coutPers,coutFluide,coutCharges]
    }

    getCoutProduction(ingredients : [{ingredient : Ingredient, quantite:number}], etapes :Etape[]){
        return this.getCoutMatiere(ingredients) + this.getCoutCharges(etapes)[2];
    }

    getCoutProdByPortion(ingredients : [{ingredient : Ingredient, quantite:number}], etapes :Etape[]){
        return this.getCoutProduction(ingredients,etapes)/this.recette.getNbCouvert();
    }

    getPrixVente(type:boolean,ingredients : [{ingredient : Ingredient, quantite:number}], etapes :Etape[]){
        //avec charges
        if(type){
            return this.getCoutProduction(ingredients,etapes)*(1+this.tva)*(1+this.marge);
        }
        return this.getCoutProduction(ingredients,etapes)*(1+this.tva)*(1+this.marge);
    }

    getEtiquette(){
        //decremente stock
        this.setStock(this.getStock()-this.recette.getNbCouvert())
    }

}