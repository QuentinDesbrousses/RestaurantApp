export class Utilisateur {

    private id : string;
    private nom : string;
    private prenom : string;
    private description : string;
    private email : string;


    constructor(utilisateur:{id: string, nom: string, prenom: string, description: string, email: string}) {
        this.id = utilisateur.id;
        this.nom = utilisateur.nom;
        this.prenom = utilisateur.prenom;
        this.description = utilisateur.description;
        this.email = utilisateur.email;
    }


}