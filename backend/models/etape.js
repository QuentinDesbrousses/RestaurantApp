const model = require("./model");

exports.Etape = class Etape extends model.Model{

    constructor(){
        super();
        table="etape";
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