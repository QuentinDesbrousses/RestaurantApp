export class Ingredient {
    private nom : string;
    private categorie : string;
    private allergene : string;
    private unite : string;
    private quantite : number;
    //TODO propriété calculée
    private coutU : number;


    constructor(ingredient:{nom:string,categorie:string,allergene:string,unite:string,quantite:number,coutU:number}) {
        this.nom = ingredient.nom;
        this.categorie = ingredient.categorie;
        this.allergene = ingredient.allergene;
        this.unite = ingredient.unite;
        this.quantite = ingredient.quantite;
        this.coutU = ingredient.coutU;
    }

    getNom(): string {
        return this.nom;
    }

    setNom(nom: string) {
        this.nom = nom;
    }

    getCategorie(): string {
        return this.categorie;
    }

    setCategorie(categorie: string) {
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