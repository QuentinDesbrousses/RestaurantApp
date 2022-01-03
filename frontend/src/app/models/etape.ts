import {Ingredient} from "./ingredient";

export class Etape {
    private static count : number = 0;

    private id : string;
    private titre : string;
    private description : string;
    private ingredients : [{ingredient : Ingredient,quantite : number}];
    private temps : number;
    private cout : number;


    constructor(etape : {id : string, titre: string, description: string, ingredients: [{ingredient : Ingredient,quantite:number}], temps: number, cout: number}) {
        this.id = etape.id;
        this.titre = etape.titre;
        this.description = etape.description;
        this.ingredients = etape.ingredients;
        this.temps = etape.temps;
        this.cout = etape.cout;
    }

    getId() : string {
        return this.id;
    }

    setId(id : string){
        this.id = id;
    }

    getTitre() : string {
        return this.titre;
    }

    setTitre(titre : string) {
        this.titre = titre;
    }

    getDescritpion() : string {
        return this.description;
    }

    setDescription(description : string) {
        this.description = description;
    }

    getIngredients() : [{ingredient : Ingredient,quantite:number}] {
        return this.ingredients;
    }

    setIngredients(ingredients : [{ingredient : Ingredient,quantite:number}]) {
        this.ingredients = ingredients;
    }

    getTemps() : number {
        return this.temps;
    }

    setTemps(temps : number) {
        this.temps = temps;
    }

    getCout() : number {
        return this.cout;
    }

    setCout(cout : number) {
        this.cout = cout;
    }


}