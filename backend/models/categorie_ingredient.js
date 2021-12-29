const model = require("./model");

exports.categorie_ingredient = class categorie_ingredient extends model.Model{

    constructor(){
        super();
        this.table="categorie_ingredient";
        this.tableId="id_cat_ingr";
    }

    selectById(id){
        return super.selectById(this.table,id,this.tableId);
    }

    selectAll(){
        return super.selectAll(this.table);
    }

    addValue(valuesToSave){
        return super.addValue(this.table, valuesToSave);
    }

    delete(condition){
        return super.delete(this.table,condition);
    }

    deleteById(id){
        return super.deleteById(this.table,this.tableId,id);
    }

    modify(id,changements){
        return super.modify(this.table,this.tableId,id,changements);
    }
}