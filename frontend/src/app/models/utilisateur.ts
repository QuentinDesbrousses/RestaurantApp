export class Utilisateur {

    private _id_utilisateur : number;
    private _nom : string;
    private _prenom : string;
    private _description : string;
    private _email : string;
    private _mdp : string;


    constructor(id_utilisateur: number, nom: string, prenom: string, description: string, email: string, mdp: string) {
        this._id_utilisateur = id_utilisateur;
        this._nom = nom;
        this._prenom = prenom;
        this._description = description;
        this._email = email;
        this._mdp = mdp;
    }


    get id_utilisateur(): number {
        return this._id_utilisateur;
    }

    set id_utilisateur(value: number) {
        this._id_utilisateur = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get prenom(): string {
        return this._prenom;
    }

    set prenom(value: string) {
        this._prenom = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get mdp(): string {
        return this._mdp;
    }

    set mdp(value: string) {
        this._mdp = value;
    }
}