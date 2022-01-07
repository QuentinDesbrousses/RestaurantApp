import {Recette} from "./recette";

export class FicheTechnique {

    private id : string;
    private recette : Recette;
    private stock : number; //TODO Propriété calculée
    private tva : number;
    private coefFluide : number;
    private coefH : number;
    private assaisonnement:number;
    private typeAssaisonnement:boolean; //true si absolut et false si pourcentage du cout matiere
    private marge : number;
    private coutH : number;

    //Propriétés calculées
    get coutMatiere() : number {
        var cm = this.recette.cout;
        //valeur absolue
        if(this.typeAssaisonnement){
            cm+=this.assaisonnement;
        }
        //valeur relative
        else{
            cm=cm*(1+this.assaisonnement);
        }
        return cm;
    }

    get coutCharges() : number {
        var cm = 0;
        var r = JSON.parse(JSON.stringify(this.recette))
        var e = JSON.parse(JSON.stringify(r.etapes))
        e.forEach((e2: { temps: number; }) => {
            cm += e2.temps*(10*this.coefH);
        })
        //TODO Prendre en compte les fluides
        return 0;
    }

    get coutProduction() : number {
        return this.coutMatiere+this.coutCharges;
    }

    get prixVente() : number {
        //cout production * (1 + marge que l'on veut) * (1 + TVA)
        return this.coutProduction*(1+this.marge)*(1+this.tva);
    }


    constructor(id: string, recette: Recette, stock: number, tva: number, coefFluide: number, coefH: number, assaisonnement: number, typeAssaisonnement: boolean, marge: number, coutH: number) {
        this.id = id;
        this.recette = recette;
        this.stock = stock;
        this.tva = tva;
        this.coefFluide = coefFluide;
        this.coefH = coefH;
        this.assaisonnement = assaisonnement;
        this.typeAssaisonnement = typeAssaisonnement;
        this.marge = marge;
        this.coutH = coutH;
    }

    getId() : string {
        return this.id
    }

    setId(id : string){
        this.id = id;
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

    getCoefFluide() : number {
        return this.coefFluide;
    }

    setCoefFluide(coefFluide : number){
        this.coefFluide = coefFluide;
    }

    getCoefH() : number {
        return this.coefH;
    }

    setCoefH(coefH : number){
        this.coefH = coefH;
    }

    getAssaisonnement() : number {
        return this.assaisonnement;
    }

    setAssaisonnement(assaisonnement : number){
        this.assaisonnement = assaisonnement;
    }

    getTypeAssaisonnement() : boolean{
        return this.typeAssaisonnement;
    }

    setTypeAssaisonnement(typeAssaisonnement : boolean){
        this.typeAssaisonnement = typeAssaisonnement;
    }

    get nbCouvert() : number {
        return this.recette.getNbCouvert()
    }

}