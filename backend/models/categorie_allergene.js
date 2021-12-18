const model = require("./model");

exports.categorie_allergene = class categorie_allergene extends model.Model{

    constructor(){
        super();
        table = "categorie_allergene";
    }

    select(elToFind, conditions){
        super.select(this.table,elToFind, conditions);
    }

    selectByID(id,elToFind){
        super.selectByID(this.table,id,elToFind);
    }

    selectAll(){
        super.selectAll(this.table);
    }

    save(valuesToSave){
        super.save(this.table, valuesToSave);
    }
    

}