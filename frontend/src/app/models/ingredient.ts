import {CategorieAllergene} from "./categorie-allergene";
import {CategorieIngredient} from "./categorie-ingredient";

export class Ingredient {

    private id : string;
    private nom : string;
    private categorie : CategorieIngredient;
    private allergene : string;
    private unite : string;
    private quantite : number;
    private coutU : number;

    constructor(ingredient:{id:string,nom:string,categorie:CategorieIngredient,allergene:string,unite:string,quantite:number,coutU:number}) {
        this.id = ingredient.id;
        this.nom = ingredient.nom;
        this.categorie = ingredient.categorie;
        this.allergene = ingredient.allergene;
        this.unite = ingredient.unite;
        this.quantite = ingredient.quantite;
        this.coutU = ingredient.coutU;
    }


    getId(): string {
        return this.id;
    }

    setId(id: string) {
        this.id = id;
    }

    getNom(): string {
        return this.nom;
    }

    setNom(nom: string) {
        this.nom = nom;
    }

    getCategorie(): CategorieIngredient {
        return this.categorie;
    }

    setCategorie(categorie: CategorieIngredient) {
        this.categorie = categorie;
    }

    getAllergene(): string {
        return this.allergene;
    }

    setAllergene(allergene: string) {
        this.allergene = allergene;
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
        return this.coutU;
    }

    setCoutU(coutU: number) {
        this.coutU = coutU;
    }

    toJSON(){
        return {nom:this.getNom(),categorie:this.getCategorie(),allergene:this.getAllergene(),unite:this.getUnite(),quantite:this.getQuantite(),coutU:this.getCoutU()}
    }
}