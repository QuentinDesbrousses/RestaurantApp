export class Unite {
    private unites  : [string];

    constructor(unites: [string]) {
        this.unites = unites;
    }

    getUnites(): [string] {
        return this.unites;
    }

    setUnites(value: [string]) {
        this.unites = value;
    }
}