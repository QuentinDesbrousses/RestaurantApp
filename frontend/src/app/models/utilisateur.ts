export class Utilisateur {

    private id_utilisateur : number;
    private nom : string;
    private prenom : string;
    private description : string;
    private email : string;
    private mdp : string;


    constructor(id_utilisateur: number, nom: string, prenom: string, description: string, email: string, mdp: string) {
        this.id_utilisateur = id_utilisateur;
        this.nom = nom;
        this.prenom = prenom;
        this.description = description;
        this.email = email;
        this.mdp = mdp;
    }
}