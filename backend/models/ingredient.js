const model = require("./model");

exports.Ingredient = class Ingredient extends model.Model {
    constructor(){
        super();
        table="ingredient"
    }

    select(elToFind, conditions){
        return super.select(this.table,elToFind, conditions);
    }

    selectByID(id,elToFind){
        return super.selectByID(this.table,id,elToFind);
    }

    selectAll(){
        return super.selectAll(this.table);
    }

    save(valuesToSave){
        return super.save(this.table, valuesToSave);
    }

    delete(condition){
        return super.delete(table,condition);
    }
    
}