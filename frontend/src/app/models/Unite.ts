export class Unite {
    private unites  : [''];

    constructor(unites: [""]) {
        this.unites = unites;
    }

    getUnites(): [""] {
        return this.unites;
    }

    setUnites(value: [""]) {
        this.unites = value;
    }
}