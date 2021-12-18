const model = require("./model");

exports.Recette = class Recette extends model.Model{

    constructor(){
        super();
        table = "recette";
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