
export class Etape {

    private id_etape : number;
    private titre_etape : string;
    private description_etape : string;
    private temps_etape : number;
    private cout_etape : number;

    constructor(id_etape: number, titre_etape: string, description_etape: string, temps_etape: number, cout_etape: number) {
        this.id_etape = id_etape;
        this.titre_etape = titre_etape;
        this.description_etape = description_etape;
        this.temps_etape = temps_etape;
        this.cout_etape = cout_etape;
    }

    getId() : number {
        return this.id_etape;
    }

    setId(id_etape : number){
        this.id_etape = id_etape;
    }

    getTitre() : string {
        return this.titre_etape;
    }

    setTitre(titre_etape : string) {
        this.titre_etape = titre_etape;
    }

    getDescritpion() : string {
        return this.description_etape;
    }

    setDescription(description_etape : string) {
        this.description_etape = description_etape;
    }

    getTemps() : number {
        return this.temps_etape;
    }

    setTemps(temps_etape : number) {
        this.temps_etape = temps_etape;
    }

    getCout() : number {
        return this.cout_etape;
    }

    setCout(cout_etape : number) {
        this.cout_etape = cout_etape;
    }

}