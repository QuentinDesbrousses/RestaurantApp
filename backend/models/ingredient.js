const model = require("./model");

exports.Ingredient = class Ingredient extends model.Model {
    constructor(){
        super();
        table="ingredient"
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