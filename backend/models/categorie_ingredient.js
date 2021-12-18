const model = require("./model");

exports.categorie_ingredient = class categorie_ingredient extends model.Model{

    constructor(){
        super();
        table="categorie_ingredient";
    }

    select(elToFind, conditions){
        super.select(table,elToFind, conditions);
    }

    selectByID(id,elToFind){
        super.selectByID(table,id,elToFind);
    }

    selectAll(){
        super.selectAll(table);
    }

    save(valuesToSave){
        super.save(table, valuesToSave);
    }
    
}