import {Ingredient} from "./ingredient";

export class Etape {
    private static count : number = 0;

    private id : number = 0;
    private titre : string;
    private description : string;
    private ingredients : [Ingredient];
    private temps : number;
    private cout : number;


    constructor(titre: string, description: string, ingredients: [Ingredient], temps: number, cout: number) {
        this.id = Etape.count + 1;
        Etape.count ++;
        this.titre = titre;
        this.description = description;
        this.ingredients = ingredients;
        this.temps = temps;
        this.cout = cout;
    }

    getId() : number {
        return this.id;
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

    getIngredients() : [Ingredient] {
        return this.ingredients;
    }

    setIngredients(ingredients : [Ingredient]) {
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